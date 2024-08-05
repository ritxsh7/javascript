// FUNCTION DECLARATIONS

// Simple func dec can be called before defining
//Ouptuts : Hello
hello();

function hello() {
  console.log("Hello");
}

// Function expression dec cannot be called before defining
// OUtputs error
helloWorld();

const helloWorld = () => {
  console.log("Hello world");
};
