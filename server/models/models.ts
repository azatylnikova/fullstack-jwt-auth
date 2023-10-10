const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const UserSchema = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, require: true },
  password: { type: DataTypes.STRING, require: true },
  isActivated: { type: DataTypes.BOOLEAN, defaultValue: false, require: true },
  isActivationLink: { type: DataTypes.STRING }
});

const TokenSchema = sequelize.define("token", {
  userid: { type: DataTypes.INTEGER },
  refreshToken: { type: DataTypes.STRING, require: true }
});

// TokenSchema.hasOne(UserSchema);

module.exports = { UserSchema, TokenSchema };
