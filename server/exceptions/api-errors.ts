module.exports = class ApiError extends Error {
  status;
  errors;

  constructor(status, message, errors = []) {
    super(message);

    this.status = status;
    this.errors = errors;
  }
  static UnauthirizeError() {
    return new ApiError(401, "пользователь не авторизован");
  }

  static BadRequest(message, errors = []) {
    return new ApiError(440, message, errors);
  }
};
