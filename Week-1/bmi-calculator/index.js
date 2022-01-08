const myWeight = parseInt(process.argv[2])
const myHeight = parseFloat(process.argv[3])
const myAge = process.argv[4]
const Excercise = process.argv[5]
const gender = process.argv[6]

if (process.argv.length < 7) {
 console.log(`
 Please make sure your input was like in the example:
    
    
    weight (kg) 
    height (m) 
    age (years) 
    exercise (yes or no)
    gender (m or f)
    
    for example:
    $ node index.js 82 1.79 32 yes m`);
 process.exit();
 }

if (isNaN(myWeight) || isNaN(myAge) || isNaN(myHeight)) {
    console.log(`
    Please make sure your input was like in the example:
       
       
       weight (kg) 
       height (m) 
       age (years) 
       exercise (yes or no)
       gender (m or f)
       
       for example:
       $ node index.js 82 1.79 32 yes m`);
    process.exit();
 }

if (myAge < 20) {
 console.log('This application is only for people above or equal to 20 years old.');
 process.exit();
 }
if ((myWeight<30) || (myWeight>300)) {
 console.log('Please input proper weight');
 process.exit();
 }

const idealWeight = 22.5 * myHeight * myHeight

const BMI = myWeight / (myHeight ** 2)

const myHeightcm = (myHeight * 100)

let BMR;
if (gender === "m") {
  BMR = (10 * myWeight) + (6.25 * myHeightcm) - (5 * myAge) + 50
 } else {
     BMR = (10 * myWeight) + (6.25 * myHeightcm) - (5 * myAge) - 150
 }

let CalBurn;
if (Excercise === "yes") {
  CalBurn = BMR * 1.6;
 } else {
     CalBurn = BMR * 1.4;
 }
const Weighttolose = myWeight - idealWeight

const timesofWeektoreachidealweight = Weighttolose / 0.5
const toWeektridealw = Math.abs(timesofWeektoreachidealweight)
let calUse;
if (Weighttolose > 0) {
    calUse = CalBurn - 500
   } else {
    calUse = CalBurn + 500
   } 
  
console.log(`
    **************
    BMI CALCULATOR
    **************
    age : ${myAge}
    height: ${myHeight}
    weight: ${myWeight}
    exercise: ${Excercise}
    gender: ${gender}

    ****************
    FACING THE FACTS
    ****************
    
    Your BMI is ${Math.round(BMI)}
    
    A BMI under 18.5 is considered underweight
    A BMI above 25 is considered overweight
    
    Your ideal weight is ${Math.round(idealWeight)} kg
    With a normal lifestyle you burn ${Math.round(CalBurn)} calories a day

    **********
    DIET PLAN
    **********
    
    If you want to reach your ideal weight of ${Math.round(idealWeight)} kg:
    
    Eat ${Math.round(calUse)} calories a day
    For ${Math.round(toWeektridealw)} weeks
`)
let a = [
   'a',
   'b',
   'c',
];

console.log(a[0]);
console.log(a[1]);