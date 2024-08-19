// Promises

const getPromise = () => {
  const promise = "Lets take a trip to Florida";
  return new Promise((resolve, reject) => {
    promise === "Lets take a trip to Paris"
      ? resolve(promise)
      : reject("Expected a different promise");
  });
};

getPromise()
  .then((result) => console.log("Success : ", result))
  .catch((err) => console.log("Error : ", err));

const bookFlight = (flight) => {
  return new Promise((resolve, reject) => {
    console.log("Booking flight...");
    setTimeout(() => {
      flight === "Air India"
        ? resolve("Flight booked")
        : reject("Failed to book a flight");
    }, 2000);
  });
};

const bookHotel = (hotel) => {
  return new Promise((resolve, reject) => {
    console.log("Booking hotel...");
    setTimeout(() => {
      hotel === "5 Star"
        ? resolve("Hotel booked")
        : reject("Failed to book a hotel");
    }, 2000);
  });
};

bookFlight("Airways")
  .then((res) => {
    console.log(res);
    return bookHotel("5 Star");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Booking failed : ", err);
  });
