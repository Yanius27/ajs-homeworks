export default class Validator {
  // eslint-disable-next-line class-methods-use-this
  validateUsername(userName) {
    const beginOfUserName = /^[^-_\d]/;
    const validCharacters = /[a-zA-Z-_]|(?<!\d)\d{0,3}/;
    const endOfUserName = /[^-_\d]$/;
    return (beginOfUserName && validCharacters && endOfUserName).test(userName);
  }
}
