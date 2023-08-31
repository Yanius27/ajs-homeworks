// eslint-disable-next-line import/prefer-default-export
export class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userSettings = new Map([
      ['theme', ''],
      ['music', ''],
      ['difficulty', ''],
    ]);
    this.customizationOptions = {
      theme: ['dark', 'light', 'gray'],
      music: ['trance', 'pop', 'rock', 'chillout', 'off'],
      difficulty: ['easy', 'normal', 'hard', 'nightmare'],
    };
  }

  setSettings(key, value) {
    if (this.customizationOptions[key] && this.customizationOptions[key].includes(value)) {
      this.userSettings.set(key, value);
      return;
    }
    throw new Error('Данная настройка/значение не предусмотрены');
  }

  get finalSettings() {
    const actualSettings = new Map();
    for (const key of this.defaultSettings.keys()) {
      if (this.userSettings.get(key) !== '') {
        actualSettings.set(key, this.userSettings.get(key));
      } else {
        actualSettings.set(key, this.defaultSettings.get(key));
      }
    }
    return actualSettings;
  }
}
