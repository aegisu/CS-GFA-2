//Calculator Function

function calculator(op) {
    var x = parseInt(document.getElementById("InputX").value);
    var y = parseInt(document.getElementById("InputY").value);

    switch (op) {
        case "add":
            return x + y;
        case "subtract":
            return x - y;
        case "multiply":
            return x * y;
        case "divide":
            return x / y;
        case "remainder":
            return x % y;
        default:
          return 'nah';
    }
}

function displayOutput(output) {
  var x = parseInt(document.getElementById("InputX").value);
  var y = parseInt(document.getElementById("InputY").value);
  var operator;
  switch (output) {
    case x + y:
      operator = "sum";
      break;
    case x - y:
      operator = "difference";
      break;
    case x * y:
      operator = "product";
      break;
    case x / y:
      operator = "quotient";
      break;
    case x % y:
      operator = "remainder of the quotient";
      break;
    default:
      operator = "nah";
  }

  var outputStatement = "The " + operator + " of " + x + " and " + y + " is " + output + ".";
  document.getElementById('output').innerHTML = outputStatement;
}