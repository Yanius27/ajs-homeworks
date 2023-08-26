export default function orderByProps(obj, order) {
  const orderedArr = [];
  const sortedArr = [];

  order.forEach((e) => {
    if (e in obj) {
      orderedArr.push({ key: e, value: obj[e] });
      // eslint-disable-next-line no-param-reassign
      delete obj[e];
    } else {
      throw new Error('Одного из переданных ключей нет в исходном объекте');
    }
  });

  Object.entries(obj).sort().forEach((elem) => sortedArr.push(elem));
  // eslint-disable-next-line guard-for-in
  for (const props in Object.fromEntries(sortedArr)) {
    orderedArr.push({ key: props, value: obj[props] });
  }

  return orderedArr;
}
