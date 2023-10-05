const sequelize = require("../db");
const { DataTypes } = require("sequelize");

export const UserSchema = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, require: true },
  password: { type: DataTypes.STRING, require: true },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  isActivated: { type: DataTypes.BOOLEAN, default: false, require: true },
  isActivationLink: { type: DataTypes.STRING }
});

export const TokenSchema = sequelize.define("token", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userid: { type: DataTypes.INTEGER },
  refreshToken: { type: DataTypes.STRING, require: true }
});

TokenSchema.hasOne(UserSchema);

module.exports = { UserSchema, TokenSchema };
