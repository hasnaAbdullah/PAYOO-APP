const addMoneySection = document.getElementById("addMoney-container");
const cashoutSection = document.getElementById("cashout-container");
const latestPaymentSection = document.getElementById("latest-payment");
const addMoneyFeature = document.getElementById("add-money-feature");
const cashoutFeature = document.getElementById("cashout-feature");
addMoneyFeature.addEventListener("click", function (event) {
  latestPaymentSection.style.display = "none";
  addMoneySection.style.display = "block";
  addMoneyFeature.style.border = "1.8px solid blue";
  addMoneyFeature.children[1].style.color = "blue";
});
cashoutFeature.addEventListener("click", function (event) {
  latestPaymentSection.style.display = "none";
  addMoneySection.style.display = "none";
  cashoutSection.style.display = "block";

  addMoneyFeature.style.border = "none";
  cashoutFeature.style.border = "1.8px solid skyblue";
});
