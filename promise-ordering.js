// var p3 = new Promise(function (resolve, reject) {
//   resolve("B");
// });
// var p1 = new Promise(function (resolve, reject) {
//   resolve(p3);
// });
// var p2 = new Promise(function (resolve, reject) {
//   resolve("A");
// });

// p1.then(function (v) {
//   console.log(v);
// });
// // p2.then(function (v) {
// //   console.log(v);
// // });

// var p3 = new Promise(function (resolve, reject) {
//   resolve("B");
// });

// var p1 = new Promise(function (resolve, reject) {
//   resolve(p3);
// });

// var p2 = new Promise(function (resolve, reject) {
//   resolve("A");
// });

// p1.then(function (v) {
//   v.then(function (d) {
//     console.log(d);
//   });
//   console.log(v);
// });

// p2.then(function (v) {
//   console.log(v);
// });

function foo() {
  setTimeout(() => {
    console.log("timeout");
  }, 4000);
}

function timeoutPromise(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("Timeout!");
    }, delay);
  });
}
// setup a timeout for `foo()`
Promise.race([
  foo(), // attempt `foo()`
  timeoutPromise(3000), // give it 3 seconds
]).then(
  function () {
    console.log("fulfilled in time");
    // `foo(..)` fulfilled in time!
  },
  function (err) {
    console.log("not fulfilled in time", err);
    // either `foo()` rejected, or it just
    // didn't finish in time, so inspect
    // `err` to know which
  }
);
