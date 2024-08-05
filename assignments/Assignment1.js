// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Employee extends Person {
//   constructor(name, age, role, contact) {
//     super(name, age);
//     this.role = role;
//     this.contact = contact;
//   }

//   getDetails() {
//     console.log("Employee details are : ");
//     console.log("Name :", this.name);
//     console.log("Age :", this.age);
//     console.log("Role :", this.role);
//     console.log("Phone :", this.contact);
//   }
// }

// const emp = new Employee("Ritesh", 20, "Product Engineer", "9876543210");
// emp.getDetails();

// Q2

const getDiscount = (seatNo) => {
  const baseDiscount = 0.05;
  return baseDiscount + 0.02 * seatNo;
};

const calculateCost = (seats) => {
  if (seats <= 2) {
    return `Cost of ${seats} seats is ${seats * 9}`;
  } else if (seats >= 6) {
    return "Booking is not allowed for 6 or more persons";
  } else if (seats > 2 && seats < 6) {
    let totalPrice = 0;
    let customerPrice = 0;
    for (let i = 0; i < seats; i++) {
      let discount = getDiscount(i);
      console.log("Discount for customer", i + 1, " : ", discount * 100, "%");
      customerPrice = 9 - 9 * discount;
      console.log("Price for customer", i + 1, " : ", customerPrice);

      totalPrice += customerPrice;
    }
    return `Cost of ${seats} seats with discount is ${totalPrice}`;
  }
};

// FOR 2 CUSTOMERS
console.log(calculateCost(2));

// FOR 4 CUSTOMERS
console.log(calculateCost(4));

// FOR 6 CUSTOMER
console.log(calculateCost(6));
