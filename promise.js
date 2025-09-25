const myFirstPromise = new Promise((resolve, reject) => {
  const condition = true;
  if (condition) {
    setTimeout(function () {
      resolve("Promise is resolved!"); // fulfilled
    }, 300);
  } else {
    reject("Promise is rejected!");
  }
});

// myFirstPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((data) => {
//     console.log(data);
//   });

const helloPromise = function () {
  return new Promise(function (resolve, reject) {
    const message = `Hi, How are you!`;

    resolve(message);
  });
};

// myFirstPromise
//   .then(helloPromise)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log("I don't care about err"));

async function demoPromise() {
  try {
    let message = await myFirstPromise;
    let message1 = await helloPromise();
    console.log(message, message1);
  } catch {
    (error) => {
      console.log("Error:" + error.message);
    };
  }
}

// finally, call your async function

(async () => {
  await demoPromise();
})();
