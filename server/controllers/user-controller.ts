// const UserService = require('../service')

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password } = req.body;
      //const userData =
    } catch (e) {}
  }
  async login(req, res, next) {
    try {
    } catch (e) {}
  }
  async logout(req, res, next) {
    try {
    } catch (e) {}
  }
  async refresh(req, res, next) {
    try {
    } catch (e) {}
  }
  async getUsers(req, res, next) {
    try {
      res.json(["123", "452"]);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new UserController();
