const myPromise = new Promise((resolve, reject) => {

  setTimeout(() => {

    const randomNum = Math.floor(Math.random() * 10);
    if (randomNum < 5) {
      resolve(`Success! Random number: ${randomNum}`);
    }
    else {
      reject(`Error! Random number: ${randomNum}`);
    }
  }, 1000);
})


myPromise.then((result) => {
  console.log(result);
})
  .catch((error) => {
    console.log(error);
  })