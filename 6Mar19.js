let age = 16;
function checkAge(age) {
  if (age > 18) {
    return true;
  } //else {
    // ...вообще что с else что без - работает одинаково
    return confirm('Родители разрешили?');
 // }
}
console.log(checkAge(age));