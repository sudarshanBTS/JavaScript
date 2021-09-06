 
const marksM = 78;
const marksH = 1.69;
const johnsM = 150;
const johnsH = 1.95;
const marksBmi = marksM / (marksH * marksH);
console.log(marksBmi);

const johnsBmi = johnsM / (johnsH * johnsH)
console.log(johnsBmi);

let markHigherBmi = marksBmi > johnsBmi;
console.log(markHigherBmi);
if(marksBmi > johnsBmi)
{
    console.log(`Marks BMI ${marksBmi} is higher than John's ${johnsBmi}`);
}
else{
    console.log(` John's BMI ${johnsBmi} is higher than Marks  ${marksBmi}`);
}

console.log('13' + ' 23' + 3);