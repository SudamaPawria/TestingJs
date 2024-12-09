function getData(callback) {
    setTimeout(() => {
      console.log("Data retrieved");
      callback();
    }, 1000);
  }
  function processData(callback) {
    setTimeout(() => {
      console.log("Data processed");
      callback();
    }, 1000);
  }
  function saveData(callback) {
    setTimeout(() => {
      console.log("Data saved");
      callback();
    }, 1000);
  }
  function main() {
    getData(function() {
      processData(function() {
        saveData(function() {
          console.log("All done");
        });
      });
    });
  }
  main();