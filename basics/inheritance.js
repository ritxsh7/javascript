class Vehicle {
  drive() {
    console.log("This is a vehicle");
  }
}

class Car extends Vehicle {
  showWheels() {
    console.log("Car has 4 wheels");
  }
}

const v = new Vehicle();
v.drive();

const c = new Car();
c.drive();
c.showWheels();

// STATIC INHERITANCE
