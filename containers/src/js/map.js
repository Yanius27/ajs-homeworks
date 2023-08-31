// eslint-disable-next-line import/prefer-default-export
export class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Error: Передано некорректное значение'],
      [2, 'Error: Ошибка на стороне сервера'],
      [3, 'Error: Данный пользователь не найден'],
      [4, 'Error: Неверный пароль'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
