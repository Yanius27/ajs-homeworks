export default class Validator {
  // eslint-disable-next-line class-methods-use-this
  validateUsername(userName) {
    const beginOfUserName = /^[^-_\d]/;
    const validCharacters = /[a-zA-Z-_]|(?<!\d)\d{0,3}/;
    const endOfUserName = /[^-_\d]$/;
    // eslint-disable-next-line max-len
    return beginOfUserName.test(userName) && validCharacters.test(userName) && endOfUserName.test(userName);
  }
}
