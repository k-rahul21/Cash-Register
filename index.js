const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given"); 
const buttonCalculate = document.querySelector("#calculate");
const message = document.querySelector("#error-message");
let noOfNotes = document.querySelectorAll(".no-of-notes");

const currency = [2000, 500, 100, 20, 10, 5, 1];

let bill, cash, diff=0, i;

hideMessage();
buttonCalculate.addEventListener('click', showMessage);

function showMessage()
{
    if( cashGiven.value === ''  || cashGiven.value <= 0  || billAmount.value === '' || billAmount.value <= 0 ) {
        displayMessage("Enter the appropriate amount.");
    } else {
        bill = parseInt(billAmount.value);
        cash = parseInt(cashGiven.value);
        diff = cash-bill;

        if(cash === bill)
        {
         displayMessage("No need to give change.");
        } else if(cash < bill){
            displayMessage("Cash given cannot be less than bill amount.");
        } else {
         calculateChange(diff);
        }
    }
}

function calculateChange(difference)
{
    displayMessage("Return amount is to be: " + "Rs. " + diff);
    for(i = 0; i<currency.length; i++)
        {
            noOfNotes[i].innerHTML = Math.trunc(difference / currency[i]);
            difference  %= currency[i];
        }
}

function hideMessage()
{
    message.style.display = "none";
}

function displayMessage(msg)
{
    message.style.display = "block";
    message.style.color = "red";   
    message.innerHTML = msg; 
}
