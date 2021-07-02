module.exports = function toReadable (number) {
  const numbers = {
    units: [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine"
    ],
    firstTen: [
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen"
    ],
    dozens: [
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety"
    ],
    hundreds: ["hundred", "thousand", "million"]
  };
  let numStr = '';
  const twoUnits = num => {
    let numString = '';
    if (num < 10) {
      numString = numbers.units[num];
    } else if (number >= 10 && num < 20) {
      numString = numbers.firstTen[num - 10];
    } else if (num < 100 && num % 10 === 0) {
      numString = numbers.dozens[num / 10 - 2];
    } else if (num > 20 && num < 100) {
      const numberArr = num.toString().split('');
      numString = `${numbers.dozens[numberArr[0] - 2]} ${numbers.units[numberArr[1]]}`;
    } 
    return numString;
  };

  if(number < 100){
    numStr = twoUnits(number);
  } else {
    const haveHundred = Math.floor(number / 100);
    const yesHundred  = number % 100;
    if(!yesHundred){
      numStr = `${numbers.units[haveHundred]} ${numbers.hundreds[0]}`;
    } else{
      const newYesHundred = twoUnits(yesHundred);
      numStr = `${numbers.units[haveHundred]} ${numbers.hundreds[0]} ${newYesHundred}`;
    }
  }
  return numStr;
}
