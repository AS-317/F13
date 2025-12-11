let foodArr = [];

// add this function to html of search bar
function searchFunc() {
    let foodInput = prompt("Type food here or click options below: ");
    foodArr.push(foodInput);
};

//add this function to html of food suggestion buttons
function buttonFunc(btn) { 
    foodArr.push(btn.textContent); 
};