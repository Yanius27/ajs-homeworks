export default class Validator {
  // eslint-disable-next-line class-methods-use-this
  validateUsername(userName) {
    return /^[^-_\d][a-zA-Z-_]|(?<!\d)\d{0,3}[^-_\d]$/.test(userName);
  }
}
