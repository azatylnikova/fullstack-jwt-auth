module.exports = class UserDTO {
  email = "";
  id = 0;
  isActivated = false;

  constructor(model) {
    this.email = model.email;
    this.id = model.id;
    this.isActivated = model.isActivated;
  }
};
