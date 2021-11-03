function random_number(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1) - min);
}

function rand_item(array = []) {
  return array[Math.floor(Math.random() * array.length)]
}

module.exports = {
  random_number,
  rand_item
};
