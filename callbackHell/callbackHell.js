// Callback hell problem - multiple nested callbacks

setTimeout(() => {
    console.log("operation 1 completed");
    setTimeout(() => {
        console.log("operation 2 completed ");
        setTimeout(() => {
            console.log("operation 3 completed ");
            console.log("All operations completed");
        }, 1000);
    }, 1000);
}, 1000);