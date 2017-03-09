var countdownGenerator = function (x) {
  let y = 1;

  return function () {
    y -= 1;
    console.log(x + y);
  }
}

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
