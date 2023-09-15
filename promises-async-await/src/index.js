/* eslint-disable linebreak-style */
import GameSavingLoader from './js/GameSavingLoader';

// eslint-disable-next-line no-unused-vars
(async () => {
  try {
    const saving = await GameSavingLoader.load();
    return saving;
  } catch (e) {
    throw new Error(e);
  }
})();
