// const p = new Promise((res, rej) => {
//   rej(Error("Failed"));
// });

// p.catch((e) => console.log(e));
// p.catch((e) => console.log(e));

// const p = new Promise((res, rej) => {
//   res("success");
// });

// p.then(() => {
//   throw new Error("err");
// })
//   .catch((e) => "Worked")
//   .catch((e) => console.log(console.log(e)));

// const p = new Promise((res, rej) => {
//   res("success");
// });

// p.then((d) => {
//   return d.toUpperCase();
// }).then((d) => console.log(d));

const p = new Promise((res, rej) => {
  res("success");
});

p.then(() => {
  throw new Error("err");
})
  .catch((e) => "Worked")
  .then((e) => {
    throw new Error("err2");
  })
  .catch((e) => console.log(e));
