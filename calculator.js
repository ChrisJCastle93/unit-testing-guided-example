function sum(a, b) {
  if (a == null && b == null) {
    return 0;
  } else if (a == null || b == null) {
      if(a == null) {
        return 0 + b;
      } else if (b == null) {
        return 0 + a;
      }
  } else {
    return a + b;
  }}

function subtract(a, b) {
  if (a == null && b == null) {
    return 0;
  } else if (a == null || b == null) {
      if(a == null) {
        return b - 0;
      } else if (b == null) {
        return a - 0;
      }
  } else {
    return a - b;
  }}

function divide(a, b) {
  if (a == 0 || b == 0) {
    throw new Error('An explanatory error message')  } else {
    return a / b;
  }
}

function multiply(a, b) {
  return;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
