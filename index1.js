
let pizzOrder = new Promise((resolve,reject)=>
{
    let isDelivered = true;
    if(isDelivered)
    {
        resolve("Pizza is delivered")
    }
    else
    {
        reject("Pizza failed to delivered")
    }
});

pizzOrder
.then((msg)=>console.log(msg))
.catch((err)=>console.log(err));

function doHomework(subject, after) {
  console.log("I'm studying " + subject);
  after(); // This is the callback!
}

function finish() {
  console.log("Homework done!");
}

doHomework("Math", finish);
// Accessing before declaration
console.log(studentName);  // Output: undefined (because of hoisting)

var studentName = "Raghul";

showBranch();  // Output: I'm an IT student

function showBranch() {
  console.log("I'm an IT student");
}
