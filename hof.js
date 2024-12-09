// A Higher order function:
// Take one or more functions as arguments(callback function) OR
// Return a function as a result

function hof(callBack) {
    callBack();
}

hof(callBack);

function callBack() {
    console.log("hi there ")
}


function hof1(hofNo) {
    return function (innerNo) {
        return hofNo + innerNo;
    }
}

const returedfun = hof1(5);
console.log(returedfun(6));



