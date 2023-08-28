// eslint-disable-next-line consistent-return
export default function validateNumber(numberStr) {
  const numberClean = numberStr.replace(/[-\s()]/g, '');
  if (/^\+7|\+86/.test(numberStr)) {
    return numberClean;
  }
  return numberClean.replace(/^8/, '+7');
}
