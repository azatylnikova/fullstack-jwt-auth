const { UserSchema } = require("../models/models");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");
const tokenService = require("./token-service");
const UserDTO = require("../dtoc/user-dto");
class UserService {
  async registration(email, password) {
    const candidate = await UserSchema.findOne({ where: { email } });
    if (candidate) {
      throw new Error(`Пользователь с таким ${email} существует`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await UserSchema.create({ email, password: hashPassword });
    await mailService.sendActiationMail(email, activationLink);

    const userDto = new UserDTO(user); /// id, email, isActivated
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto
    };
  }
}

module.exports = new UserService();
