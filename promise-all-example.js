const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

const results = await Promise.all([promise1, promise2, promise3]);
console.log(results); // [1, 2, 3]
