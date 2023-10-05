const jwt = require("jsonwebtoken");
const { TokenSchema } = require("../models/models");

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign({ payload }, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "30m"
    }); //// 3 параметр - время жизни токена
    const refreshToken = jwt.sign({ payload }, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "30d"
    }); //// 3 параметр - время жизни токена

    return {
      accessToken,
      refreshToken
    };
  }

  async saveToken(userid, refreshToken) {
    const tokenData = await UserSchema.findOne({ where: { user: userid } });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await TokenSchema.create({ user: userid, refreshToken });
    return token;
  }
}

module.exports = new TokenService();
