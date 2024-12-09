function handleError(error) {
  if (error) {
    console.error("Error:", error);
    return true;
  }
  return false;
}
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
function handleOperation3(error, result3) {
  if (handleError(error)) return;
  console.log("All operations completed successfully");
}
function handleOperation2(error, result2) {
  if (handleError(error)) return;
  asyncOperation3(handleOperation3);
}
function handleOperation1(error, result1) {
  if (handleError(error)) return;
  asyncOperation2(handleOperation2);
}
function main() {
  asyncOperation1(handleOperation1);
}
main();