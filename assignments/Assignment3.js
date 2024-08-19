//Multiple Parameters
const add = (a, b) => {
  const sum = a + b;
  console.log("Additon = " + sum);
};
add(10, 20);

//Single Parameter
const hi = (name) => console.log("Hello, " + name);
hi("Ritesh");

//Scope of variables
let g = "Global";

function scopeDemo() {
  let l = "Local";

  if (true) {
    let b = "Block";
    console.log(b);
    console.log(l);
    console.log(g);
  }
  // console.log(b);// will throw an error as it is a local variable
  console.log(l);
  console.log(g);
}
scopeDemo();

//find_more_than_avg()
//gen_freq()

let marks = [24, 12, 4, 5, 24, 34, 23, 24, 24, 12, 36, 34];

function avgMarks(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return sum / marks.length;
}
const avg = avgMarks(marks);
console.log("Average marks = ", avg);

function moreThanPercentage(marks) {
  let count = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] > avg) {
      count++;
    }
  }
  let per = (count / marks.length) * 100;
  return per.toFixed(2);
}
let perMoreThanAvg = moreThanPercentage(marks);
console.log(
  "Percentage of students who scored more than avg= " + perMoreThanAvg + "%"
);

function getFrequency(marks) {
  let frequency = Array(26).fill(0);

  marks.forEach((mark) => {
    frequency[mark]++;
  });
  return frequency;
}
let freq = getFrequency(marks);
console.log("Frequency of Marks:");
freq.forEach((count, mark) => {
  if (count > 0) {
    console.log("Marks ", mark, " : ", count, "student(s)");
  }
});

function findUniqueChars(example) {
  let result = "";
  for (let char of example) {
    if (!result.includes(char)) {
      result += char;
    }
  }
  return result;
}

let example = "my name is ritesh patil";
let uniqueCharacters = findUniqueChars(example);
console.log(uniqueCharacters);

//Date
function getFutureDate(curr, days) {
  let date = new Date(curr);

  date.setDate(date.getDate() + days);

  return date.toDateString();
}

let oldDate = "2024-12-03";
let days = 30;

let resultDate = getFutureDate(oldDate, days);
console.log("Date after adding specified days =" + resultDate);

//Subset

function getSubstr(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let substr = "";
    for (let j = i; j < str.length; j++) {
      substr += str[j];
      result.push(substr);
    }
  }
  return result;
}

let input = "ritesh";
let result = getSubstr(input);
console.log(result);

const student = {
  name: "Shreyash Kulkarni",
  class: "BE",
  rollno: 12,
};
function listProperties(obj) {
  let values = Object.values(obj);
  return values.join(", ");
}
let output = listProperties(student);
console.log(output);
