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
  async function main() {
    try {
      await getData();
      await processData();
      await saveData();
      console.log("All done");
    } catch (error) {
      console.error("Error:", error);
    }
  }
  main();