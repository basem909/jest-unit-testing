const functions = {
  strLength: (str) => {
    str = str.split("");
    if (str.length < 1 || str.length > 10) {
      return null;
    } else {
      return str.length;
    }
  },
  reverseString: (str) => {
    str = str.split("").reverse().join("");
    return str;
  },
  calculator: {
    add: (int1, int2) => {
      return int1 + int2;
    },
    substract: (int1, int2) => {
      return int1 - int2;
    },
    divide: (int1, int2) => {
      return int1 / int2;
    },
    multiply: (int1, int2) => int1 * int2,
  },
  capitalize: (str) => str[0].toUpperCase() + str.slice(1),
};

module.exports = functions;
