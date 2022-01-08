function CalBMI(weight, height) {
  const BMI = weight / (height * height)
  return BMI;
}

function CalBMR(weight, height, age, gender) {
  const heightcm = height * 100;

  let BMR;

  if (gender === "m") {
   BMR = (10 * weight) + (6.25 * heightcm) - (5 * age) + 50
  } else { 
    BMR = (10 * weight) + (6.25 * heightcm) - (5 * age) - 150
   } 
  
 return BMR;
}
function CalidealWeight(height) {
 const idealWeight = (22.5 * height * height)
 return idealWeight;
}

function CalDailyCaloires(BMR) {
  let DailyCal;
  
  if (process.argv[5] === "yes") {
    DailyCal = (BMR * 1.6)
  } else {
    DailyCal = (BMR * 1.4)
  }
  return DailyCal
}

function CalDietWeeks(weighttolose){
  DietWeeks = (weighttolose / 0.5)
  return DietWeeks
}

function numberofinput(argv) {
  if (argv.length !== 7) {
  console.log(`Please make sure your input was like in the example:
    
    
  weight (kg) 
  height (m) 
  age (years) 
  exercise (yes or no)
  gender (m or f)
  
  for example:
  $ node index.js 82 1.79 32 yes m`);
  process.exit() ;
   }
 
 }

function weightbalance(weight){
  if ((weight < 30) || (weight > 300)){
   console.log(`
  Please input weight between 30 and 300.
  for example:
  $ node index.js 82 1.79 32 yes m`)
   
  process.exit() ;
  }
 }

function dailyexercise(argv) {
  if ((argv !== "yes") && (argv !== "no")) {
    console.log(`Please make sure your input on exercise is yes or no.:
    
    
  weight (kg) 
  height (m) 
  age (years) 
  exercise (yes or no)
  gender (m or f)
  
  for example:
  $ node index.js 82 1.79 32 yes m`);
  process.exit() ;
  }
 }
function genderinput(argv){
 if ((argv !== "m") && (argv !== "f")) {
  console.log(`Please make sure your input on gender is m or f.:
    
    
  weight (kg) 
  height (m) 
  age (years) 
  exercise (yes or no)
  gender (m or f)
  
  for example:
  $ node index.js 82 1.79 32 yes m`);
  process.exit() ;
  }
 }

function formatOutput(userObject){
  return ` **************
  BMI CALCULATOR
  **************

  age: ${userObject.myAge} years
  gender: ${userObject.myGender}
  height: ${userObject.myHeight} m
  weight: ${userObject.myWeight} kg
  do you exercise daily? ${userObject.Excercise}

  ****************
  FACING THE FACTS
  ****************

  Your BMI is ${userObject.BMI}

  A BMI under 18.5 is considered underweight
  A BMI above 25 is considered overweight

  Your ideal weight is ${userObject.idealWeight} kg
  With a normal lifestyle you burn ${userObject.DailyCal} calories a day

  **********
  DIET PLAN
  **********

  If you want to reach your ideal weight of ${userObject.idealWeight} kg:

  Eat ${userObject.dietCal} calories a day
  For ${userObject.DietWeeks} weeks
  `;
}

function bmiCalculator() {
  numberofinput(process.argv);
  const myWeight = parseInt(process.argv[2]);
  weightbalance(myWeight);
  const myHeight = parseFloat(process.argv[3]);
  const myAge = process.argv[4];
  const Excercise = process.argv[5];
  dailyexercise(Excercise);
  const myGender = process.argv[6];
  genderinput(myGender);
  const BMI = CalBMI(myWeight, myHeight);
  const BMR = CalBMR(myWeight, myHeight, myAge, myGender);
  const idealWeight = CalidealWeight(myHeight);
  const DailyCal = CalDailyCaloires(BMR);
  const weighttolose = (myWeight - idealWeight);
  const DietWeeks = CalDietWeeks(weighttolose);
  const AbsoluteDietWeeks = Math.abs(DietWeeks);
  let dietCal;
  if (weighttolose > 0) {
  dietCal = (DailyCal - 500)
 } else {
   dietCal = (DailyCal + 500)
 }
 const user = {
   myAge: myAge,
   myGender: myGender,
   myWeight: myWeight,
   myHeight: myHeight,
   Excercise: Excercise,
   BMI: Math.round(BMI),
   idealWeight: Math.round(idealWeight),
   weighttolose: weighttolose,
   DailyCal: DailyCal,
   DietCal: dietCal,
   DietWeeks: Math.round(AbsoluteDietWeeks)
  };
 
 const Output = formatOutput(user);
 console.log(Output);
}
bmiCalculator();


