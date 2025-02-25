const loginBtn = document.getElementById("login-btn");
const loginForm = document.querySelector("form");
const accountInput = document.getElementById("account-number");
const pinInput = document.getElementById("pin-number");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
loginBtn.addEventListener("click", (event) => {
  const accountNumber = accountInput.value;
  const pinNumber = pinInput.value;
  if (accountNumber.length === 11) {
    console.log(accountNumber);
    if (pinNumber === "1234") {
      window.location.href = "./home.html";
    } else {
      alert("wrong pin number");
    }
  } else {
    alert("wrong account number");
  }
  console.log(pinNumber);
});
