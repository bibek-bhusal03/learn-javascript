// function add(getX, getY, cb) {
//   var x, y;
//   getX(function (xVal) {
//     x = xVal;
//     // both are ready?
//     if (y != undefined) {
//       cb(x + y); // send along sum
//     }
//   });
//   getY(function (yVal) {
//     y = yVal;
//     // both are ready?
//     if (x != undefined) {
//       cb(x + y); // send along sum
//     }
//   });
// }
// // `fetchX()` and `fetchY()` are sync or async
// // functions
// add(fetchX, fetchY, function (sum) {
//   console.log(sum); // that was easy, huh?
// });

// async function demo() {
//   console.log("this is first");
//   async function hello() {
//     await new Promise((res) => setTimeout(res, 1000));
//     console.log("this function is paused for 1 sec");
//   }
//   hello();
//   console.log("this is third");
// }

// demo();
// console.log("This is fourth");

// function add(xPromise, yPromise) {
//   // `Promise.all([ .. ])` takes an array of promises,
//   // and returns a new promise that waits on them
//   // all to finish
//   return (
//     Promise.all([xPromise, yPromise])
//       // when that promise is resolved, let's take the
//       // received `X` and `Y` values and add them together.
//       .then(function (values) {
//         // `values` is an array of the messages from the
//         // previously resolved promises
//         return values[0] + values[1];
//       })
//   );
// }
// // `fetchX()` and `fetchY()` return promises for
// // their respective values, which may be ready
// // *now* or *later*.
// add(fetchX(), fetchY())
//   // we get a promise back for the sum of those
//   // two numbers.
//   // now we chain-call `then(..)` to wait for the
//   // resolution of that returned promise.
//   .then(function (sum) {
//     console.log(sum); // that was easier!
//   });

// const a = new Promise((resolve, reject) => {
//   const condition = false;
//   if (condition) {
//     resolve();
//   }
//   reject();
// });

// a.then(
//   () => {
//     console.log("this is fulfilled");
//   },
//   () => {
//     console.log("this is printed if promise is rejected");
//   }
// );

const myFirstPromise = new Promise(() => {
  const condition = true;
  if (condition) {
    setTimeout(function () {
      resolve("Promise is resolved!");
    }, 300);
  } else {
    reject("Promise is rejected!");
  }
});

myFirstPromise
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
