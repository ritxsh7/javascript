// DECLARATION

// 1. Using string literal
const str = "Test";
console.log(str);

// 2. Using String class
const string = new String("   String class test 1 and test 2");
console.log(string);

// chartAt() or at()
const char = string.at(12);
console.log(char);

//chartCodeAt()
const charCode = string.charCodeAt(12);
console.log(charCode);

// split()
const splits = string.split(" ");
console.log(splits[5]);

// slice()
const slice = string.slice(3, 23);
console.log(slice);

// substr()
const substr = string.substring(3, 10);
console.log(substr);

// trim()
const trim = string.trim();
console.log(trim);
