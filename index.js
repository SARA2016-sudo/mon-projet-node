// index.js (branche feature)
function addition(a, b) {
  return a + b;
}

function soustraction(a, b) {
  return a - b;
}

if (require.main === module) {
  console.log("Résultat addition:", addition(5, 3));
  console.log("Résultat soustraction:", soustraction(5, 3));
}

module.exports = { addition, soustraction };
function addition(a, b) {
  return a + b;
}

if (require.main === module) {
  console.log("Résultat:", addition(5, 3));
}

module.exports = { addition };
console.log('Hello Node');
