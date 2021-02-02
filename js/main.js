function pinGenerate() {
    const random = Math.random() * 10000;
    const pin = (random + "").split('.')[0];
    if (pin.length === 4) {
        return pin;
    } else {
        return pinGenerate();
    }
}

// / display pin
function generatePin() {
    const pin = document.getElementById('pinInput');
    pin.value = pinGenerate();
}


// / event handler

const buttonContainer = document.getElementById('button-container');
buttonContainer.addEventListener('click', function(event) {
    let digit = event.target.innerText;
    if (isNaN(digit)) {
        if (digit === "C") {
            const inputValue = document.getElementById('inputNumber');
            inputValue.value = '';
        } else if (digit === "B") {
            const inputValue = document.getElementById('inputNumber');
            inputValue.value = inputValue.value.slice(0, -1);
        }
    } else {
        // console.log(digit);
        const inputValue = document.getElementById('inputNumber');
        inputValue.value = inputValue.value + digit;
    }
})

// inputValue.value = ''

function matchPin() {
    const generatePin = document.getElementById('pinInput');
    const inputPin = document.getElementById('inputNumber');
    if (generatePin.value === inputPin.value) {
        matchResult("block", "none");
    } else {
        matchResult("none", "block");
    }
}

// . match result function


function matchResult(correctStatus, incorrectStatus) {
    document.getElementById('match').style.display = correctStatus;
    document.getElementById('notMatch').style.display = incorrectStatus;
}

// document.getElementById('generatePin').addEventListener("click", function() {

// })