window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}



// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues()
  updateMonthly(calculateMonthlyPayment(currentUIValues))
}

function calculateMonthlyPayment(currentUIValues){
  const userInput = currentUIValues;
  const principal = userInput.amount;
  // console.log(principal);
  const years = userInput.years;
  // console.log(years);
  const rate = userInput.rate/100;
  // console.log(rate)
  return ((principal*(rate/12))/(1-(1+rate)**(years*-12))).toFixed(2);
  
}


// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPayment = document.querySelector('#monthly-payment')
  console.log(monthly)
  monthlyPayment.innerText = `$ ${monthly}`
  
}

