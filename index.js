function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched");
  }, 1000);
}
fetchData((result) => {
  console.log(result);
});

function exampleFunction(arg) {
  console.log("arg", arg);
}
fetchData(exampleFunction);
