function isEligible(age) {
  try {
    if (age < 18) throw "You are not eliglible to vote";
    console.log("You are eligible to vote");
  } catch (error) {
    console.log(error);
  }
}

isEligible(17);
