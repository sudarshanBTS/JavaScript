function logger(){
    console.log('My name is Sudarshan');
} 
logger();
// logger();
// logger();

const calcAge3 = birthyear => 2037 - birthyear;
const age = calcAge3(1991);
console.log(age);

const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2037 - birthyear;
    const retirement = 65 - age ;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}
// yearsUntilRetirement(1991)
console.log(yearsUntilRetirement(1991,'sudar'));
