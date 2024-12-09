function asyncOperation1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Operation 1 completed");
      resolve("Result 1");
    }, 1000);
  });
}
function asyncOperation2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Operation 2 completed");
      resolve("Result 2");
    }, 1000);
  });
}
function asyncOperation3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Operation 3 completed");
      resolve("Result 3");
    }, 1000);
  });
}
function main() {
  asyncOperation1()
    .then(result1 => {
      return asyncOperation2();
    })
    .then(result2 => {
      return asyncOperation3();
    })
    .then(result3 => {
      console.log("All operations completed successfully");
    })
    .catch(error => {
      console.error("Error:", error);
    });
}
main();