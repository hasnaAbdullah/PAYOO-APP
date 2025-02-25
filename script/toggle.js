const addMoneySection = document.getElementById("addMoney-container");
const latestPaymentSection = document.getElementById("latest-payment");
const addMoneyFeature = document.getElementById("add-money-feature");

addMoneyFeature.addEventListener("click", function (event) {
  latestPaymentSection.style.display = "none";
  addMoneySection.style.display = "block";
  addMoneyFeature.style.border = "1.8px solid skyblue";
});
