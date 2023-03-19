let age = 164;
const checkAge = (age) =>{return (age>18) ? true : (confirm('Родители разрешили?'))}
//function checkAge(age) {
    //return (age > 18) ? true : confirm('Родители разрешили?');
 // }
const checkAge1 = (age) => {return (age > 18) || confirm('Родители разрешили?');}
console.log(checkAge(age));
