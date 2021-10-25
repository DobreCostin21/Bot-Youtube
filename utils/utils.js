const translate = require("@iamtraction/google-translate");

function random_number(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1) - min);
}

function random_from_array(array = []) {
  return array[Math.floor(Math.random() * array.length)];
}

function gl_translate(text = "", from = "") {
  translate(text, { from: from, to: "ro" })
    .then(console.log)
    .catch(console.error);
}

module.exports = {
  random_number,
  random_from_array,
  gl_translate,
};
