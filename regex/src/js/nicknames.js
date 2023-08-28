export default class Validator {
  // eslint-disable-next-line class-methods-use-this
  validateUsername(userName) {
    return /^[^-_\d][\w-]*[^-_\d]$/.test(userName);
  }
}
