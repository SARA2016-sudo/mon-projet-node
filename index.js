console.log("Mon projet Node.js fonctionne !");
// addition(a, b) -> retourne la somme de a et b
function addition(a, b) {
  return a + b; // simple addition
}

function soustraction(a, b) {
  return a - b;
}

if (require.main === module) {
  console.log("Résultat addition:", addition(5, 3));
  console.log("Résultat soustraction:", soustraction(5, 3));
}

module.exports = { addition, soustraction };

