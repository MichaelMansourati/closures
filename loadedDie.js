function makeLoadedDie() {
  let index = -1
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];

  return function() {
    index += 1;
    return list[index];
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

/*
function makeLoadedDie is called
  a new ID is created through incrementation
  ID is passed in as value for list array index
  log selected value


*/