export default function destructuring(obj) {
  const arr = [];
  obj.special.forEach((el) => {
    if (!('description' in el)) {
      // eslint-disable-next-line no-param-reassign
      el.description = 'Описание недоступно';
    }
    const {
      id, name, icon, description,
    } = el;
    arr.push({
      id, name, icon, description,
    });
  });
  return arr;
}
