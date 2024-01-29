//  pseudocode steps for algorithm:

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0; // step 1 fulfilled



function increment() {  // step 2 fullfilled: create function that will listen for clicks
    count++; // step 3 fulfilled
    console.log(count); // console.log out the result of the incremented variable
    countEl.innerHTML = count; // step 4 fulfilled: change the count-el element to the current value stored in variable count
}



function save() { 


    let countSave = count + " - ";  // store the incremented count in the countSave variable

    saveEl.textContent += countSave; 

    countEl.textContent = 0; // set the countEl element to 0

    count = 0; // reset the count element also to 0 as JavaScript will memorize the value therein

}
























