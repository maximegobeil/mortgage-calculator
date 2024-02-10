function calculateMortgage() {
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const loanTerm = parseInt(document.getElementById("loanTerm").value);
  const interest = parseFloat(document.getElementById("interest").value);

  const monthlyInterest = interest / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  const monthlyPayment =
    (loanAmount * monthlyInterest) /
    (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));

  document.getElementById("monthlyPayment").textContent =
    "Monthly payment: $" + monthlyPayment.toFixed(2);
}
