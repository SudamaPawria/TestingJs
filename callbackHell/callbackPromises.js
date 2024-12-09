function getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Data retrieved");
        resolve();
      }, 1000);
    });
  }
  function processData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Data processed");
        resolve();
      }, 1000);
    });
  }
  function saveData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Data saved");
        resolve();
      }, 1000);
    });
  }
  function main() {
    getData()
      .then(processData)
      .then(saveData)
      .then(() => {
        console.log("All done");
      });
  }
  main();