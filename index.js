const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanArr = [
  {arabicNumeral: 1000,
  romanNumeral: "M"},
  {arabicNumeral: 900,
  romanNumeral: "CM"},
  {arabicNumeral: 500,
  romanNumeral: "D"},
  {arabicNumeral: 400,
  romanNumeral: "CD"},
  {arabicNumeral: 100,
  romanNumeral: "C"},
  {arabicNumeral: 90,
  romanNumeral: "XC"},
  {arabicNumeral: 50,
  romanNumeral: "L"},
  {arabicNumeral: 40,
  romanNumeral: "XL"},
  {arabicNumeral: 10,
  romanNumeral: "X"},
  {arabicNumeral: 9,
  romanNumeral: "IX"},
  {arabicNumeral: 5,
  romanNumeral: "V"},
  {arabicNumeral: 1,
  romanNumeral: "I"},
  ];

const romNumeralConverter = (input)=>{
  if(input === 0){
    return "";
  }
    for (let item of romanArr){
          if (input >= item.arabicNumeral){
        return item.romanNumeral + romNumeralConverter(input - item.arabicNumeral);
          }
    } 
};

const checkUserInput = ()=>{
  const inputToInt = parseInt(number.value);
  if(!number.value || isNaN(inputToInt)){
    output.textContent = "Please enter a valid number";
    return;
  }else if(inputToInt < 1){
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  }else if(inputToInt >= 4000){
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }else{
      output.textContent = romNumeralConverter(inputToInt);
      number.value = "";
  }
};

convertBtn.addEventListener("click", checkUserInput);

