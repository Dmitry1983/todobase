/* eslint-disable no-bitwise */
export function generateUUID() {
  let d = new Date().getTime();

  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    },
  );

  return uuid;
}

export function randomKeyGenerator() {
  const letters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let word = '';

  for (let i = 0; i < 15; i++) {
    word += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  this.randomKey =
    word.substr(0, 5) + '-' + word.substr(5, 5) + '-' + word.substr(10, 5);

  return this.randomKey.toUpperCase();
}
