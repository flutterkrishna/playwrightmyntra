//settimeout->it is delay the execution of the function according to specific time 
//settimeout is a asynchronous function it will not wait for the completion of the function and it will move to the next line of code   


function genaiCallback(callback) {
 setTimeout(() => {
    console.log("This is a callback function executed after 3 seconds.");
    callback(); // Execute the callback function
 }, 3000);
}

function mainFunction(callback) {         
    setTimeout(() => {
        console.log("This is the main function.");
        callback // Call the callback function after the main function logic
    }, 2000);

}

genaiCallback(() => {
  mainFunction(() => {
    console.log("All functions executed.");
  });
});