const mainBalanceStatus = document.getElementById("main-balance");
let mainBalance = parseFloat(mainBalanceStatus.innerText);
const amount = document.getElementById("amount");
const pin = document.getElementById("pin-number");

const addMoneyBtn = document.getElementById("add-money");
let newAmount;

addMoneyBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let convertedPin = parseInt(pin.value);
  let conertedAmount = parseFloat(amount.value);
  if (convertedPin && conertedAmount) {
    if (convertedPin === 1234) {
      newAmount = conertedAmount + mainBalance;
      mainBalanceStatus.innerText = newAmount;
    } else {
      alert("wrong pin number");
    }
  } else {
    alert("fill up the blank input field");
  }
});
