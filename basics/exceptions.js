function isEligible(age) {
  try {
    if (age < 18) throw "You are not eliglible to vote";
    console.log("You are eligible to vote");
  } catch (error) {
    console.log(error);
  }
}

// isEligible(17);

try {
  const arr = new Array(1, 2, 3);
} catch (error) {
  console.log(error);
}
