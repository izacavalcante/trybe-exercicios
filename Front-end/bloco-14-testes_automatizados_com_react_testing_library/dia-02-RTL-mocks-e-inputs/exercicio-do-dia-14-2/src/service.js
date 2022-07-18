const numeroAleatorio = (max) => Math.floor(Math.random() * max + 1);

const upperCase = (string) => string.toUpperCase();

const firstLetter = (string) => string.charAt(0);

const concatStrings = (str1, str2) => str1.concat(str2);

module.exports = { numeroAleatorio, upperCase, firstLetter,concatStrings };
