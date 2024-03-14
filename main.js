// Number Analyzer

// HTML Elements
let numEl = document.getElementById("numInput");

// Add Event Listener
numEl.addEventListener("change", analyzeNumber);

// Event Function
function analyzeNumber() {
  // Get Number from Input Element
  let numInput = Number(numEl.value);

  // Analyze Number and display results (Some are commented out so you can test your functions individually without errors coming up)
  document.getElementById("sign").innerHTML = getSign(numInput);
  document.getElementById("even-odd").innerHTML = evenOrOdd(numInput);
  document.getElementById("multiple").innerHTML = multipleOf10(numInput);
  document.getElementById("digits").innerHTML = numDigits(numInput);

  //**BONUS**//
  document.getElementById("prime").innerHTML = isPrime(numInput);
}

// Analyze Functions - Add your functions below. These should match the named functions above (e.g. getSign). When ready to test, uncomment the appropriate line in analyzeNumber before running.

function getSign(numInput) {
  if (numInput > 0) {
    return "positive";
  } else if (numInput < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

function evenOrOdd() {
  if (numInput % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

function multipleOf10(numInput) {
  if (numInput % 10 == 0) {
    return "yes";
  } else {
    return "no";
  }
}

function numDigits(numInput) {
  if (numInput >= 9) {
    return "2";
  } else if (numInput >= 99) {
    return "3";
  } else if (numInput >= 999) {
    return "4";
  }
}

function isPrime(numInput) {
  let yesPrime = true;
  for (i = 2; i <= numInput / 2; i++) {
    if (numInput % 1 == 0) {
      yesPrime = false;
      break;
    }
  }
  if (yesPrime == false) {
    return "no";
  } else {
    return "yes";
  }
}
