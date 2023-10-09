const { UserSchema } = require("../models/models");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");
const tokenService = require("./token-service");
const UserDTO = require("../dtoc/user-dto");

const apiError = require("../exceptions/api-errors");
class UserService {
  async registration(email, password) {
    const candidate = await UserSchema.findOne({ where: { email } });
    if (candidate) {
      throw apiError.BadRequest(`Пользователь с таким ${email} существует`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();

    const user = await UserSchema.create({ email, password: hashPassword });

    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`
    );

    const userDto = new UserDTO(user); /// id, email, isActivated

    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto
    };
  }

  async activate(activationLink) {
    const user = await UserSchema.findOne({ activationLink });
    if (!user) {
      throw apiError.BadRequest("Некорректная ссылка активации");
    }
    user.isActivated = true;
    await user.save();
  }

  async login(email, password) {
    const user = await UserSchema.findOne({ where: { email } });

    if (!user) {
      throw apiError.BadRequest("Пользователь с таким email не найден");
    }

    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw apiError.BadRequest("Неверный пароль");
    }

    const userDto = new UserDTO(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto
    };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }
}

module.exports = new UserService();
