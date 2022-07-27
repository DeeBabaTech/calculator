
let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector('#clear');
let cleanBtn = document.querySelector('#clean');

let total = document.querySelector("#total");

// For Number Inputs
btns.forEach((button, i) => {
  button.addEventListener("click", () => {
    // Inner Values for calculator
 
    if (resultBox.innerHTML == "0") { 
      resultBox.innerHTML = "";
    }

    let value = btns[i].innerHTML;
    resultBox.innerHTML += value;
  });
});


// Function to evalute Strings
function evaluate(fn) {
    return new Function('return ' + fn)();
}

// To calculate All Input
total.addEventListener('click', ()=> {
let x = evaluate(resultBox.innerHTML);
resultBox.innerHTML = x;

console.log(evaluate(allInputs));
})

// Clear all Inputs
clearBtn.addEventListener('click', ()=> {
    resultBox.innerHTML = "0";
})

cleanBtn.addEventListener('click', ()=> {
    resultBox.innerHTML = "0";
})

