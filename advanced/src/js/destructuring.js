export default function destructuring(obj) {
  const arr = [];
  obj.special.forEach((el) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = el;
    arr.push({
      id, name, icon, description,
    });
  });
  return arr;
}
