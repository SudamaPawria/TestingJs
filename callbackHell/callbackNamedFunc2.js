function asyncOperation1(callback) {
  setTimeout(() => {
    console.log("Operation 1 completed");
    callback(null, "Result 1");
  }, 1000);
}
function asyncOperation2(callback) {
  setTimeout(() => {
    console.log("Operation 2 completed");
    callback(null, "Result 2");
  }, 1000);
}
function asyncOperation3(callback) {
  setTimeout(() => {
    console.log("Operation 3 completed");
    callback(null, "Result 3");
  }, 1000);
}
function main() {
  asyncOperation1(function (error, result1) {
    if (error) {
      console.error("Error:", error);
    } else {
      asyncOperation2(function (error, result2) {
        if (error) {
          console.error("Error:", error);
        } else {
          asyncOperation3(function (error, result3) {
            if (error) {
              console.error("Error:", error);
            } else {
              console.log("All operations completed successfully");
            }
          });
        }
      });
    }
  });
}
main();