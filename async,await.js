// new Array(1e9).fill(0).map((_, idx) => idx);

// function* numGenerator(length) {
//   for (let i = 0; i < length; i++) {
//     yield i;
//   }
// }

// const gen = numGenerator(20);

// console.log(gen.next()); // { value: 1, done: false }
// console.log(gen.next()); // { value: 2, done: false }
// console.log(gen.next()); // { value: undefined, done: true }

function* generateNumbers(length) {
  for (let i = 0; i < length; i++) {
    yield i;
  }
}

const arr = [1, 2, 3];

// const iterator = arr[Symbol.iterator]();
// arr[Symbol];
// console.log("debug 0", iterator.next());
// console.log("debug 1", iterator.next());

// console.log("debug", arr[Symbol.iterator]().next());

// console.log("debug 2", arr[Symbol.iterator]().next());

const billionNumberGenerator = generateNumbers(1e9);
// console.log(billionNumberGenerator);
// we can process the numbers as below:
for (const num of billionNumberGenerator) {
  //   console.log("num");
  // we can process the `num` here
}

const iterate = function (input) {
  const input0 = [input];
  const iterator = input[Symbol.iterator]();
  console.log("debug ((", iterator.next());
  return iterator.next();
};

iterate(21);
