const percentageTax = 30;
// create a function to calculate the gross pay
function calculateGrossPay() {
  const basicPay = parseFloat(document.getElementById("basicPay").value);
  const benefits = parseFloat(document.getElementById("benefits").value);
  const grossPay = basicPay + benefits;
  
  document.getElementById("grossPayResult").textContent = `Gross Pay: ${grossPay.toFixed(2)}`;
}
// calculate the deductables from the input
function calculateDeductibles() {
  const deductibles = parseFloat(document.getElementById("deductibles").value);
  
  document.getElementById("deductiblesResult").textContent = `Deductibles: ${deductibles.toFixed(2)}`;
}
//calculate The PAYE by multiplying the taxable income with the tax percentage
function calculatePAYE() {
  const grossPay = parseFloat(document.getElementById("grossPayResult").textContent.split(": ")[1]);
  const deductibles = parseFloat(document.getElementById("deductiblesResult").textContent.split(": ")[1]);
  //taxable income is the difference between the gross pay and deductables
  const taxableIncome = grossPay - deductibles;
  const paye = Math.round(taxableIncome * (percentageTax / 100));
  
  document.getElementById("payeResult").textContent = `PAYE: ${paye.toFixed(2)}`;
}
//Calculate the net pay from the difference between gross pay and PAYE
function calculateNetPay() {
  const grossPay = parseFloat(document.getElementById("grossPayResult").textContent.split(": ")[1]);
  const paye = parseFloat(document.getElementById("payeResult").textContent.split(": ")[1]);
  const netPay = grossPay - paye;
  
  document.getElementById("netPayResult").textContent = `Net Pay: ${netPay.toFixed(2)}`;
}
