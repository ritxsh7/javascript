const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Waiting for response from server");
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Connection established");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  const data = null;
  if (!data) reject("Failed to fetch data from server");
  else
    resolve({
      message: "Data fetched from server",
      data,
    });
});

const fetchData = async () => {
  const response1 = await promise1;
  console.log(response1);

  const response2 = await promise2;
  console.log(response2);

  try {
    const response3 = await promise3;
    console.log(response3);
  } catch (err) {
    console.log(err.message);
  }
};
fetchData();
