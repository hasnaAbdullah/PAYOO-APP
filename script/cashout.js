const cashoutBtn = document.getElementById("cashout");
cashoutBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const mainBalanceStatus = document.getElementById("main-balance");
  let mainBalance = parseFloat(mainBalanceStatus.innerText);
  const cashoutAmount = document.getElementById("cashout-amount");
  const cashoutPin = document.getElementById("cashout-pin");
  let convertedPin = parseInt(cashoutPin.value);
  let convertedAmount = parseFloat(cashoutAmount.value);

  if (convertedPin && convertedAmount) {
    if (convertedPin === 1234) {
      let newAmount = mainBalance - convertedAmount;
      mainBalanceStatus.innerText = newAmount;
    } else {
      alert("wrong pin number");
    }
  } else {
    alert("fill up the blank input field");
  }
});
