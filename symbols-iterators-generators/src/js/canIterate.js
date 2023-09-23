/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
/* eslint-disable consistent-return */
export default function canIterate(prop) {
  try {
    if ([...prop]) {
      return true;
    }
  } catch (error) {
    return false;
  }
}

console.log(canIterate(new Map()));
console.log(canIterate(new Set()));
console.log(canIterate(null));
console.log(canIterate(10));
console.log(canIterate('Netology'));
