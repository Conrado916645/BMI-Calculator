
var slider = document.getElementById("height_range");
var height_value = document.getElementById("height_value");

var weight_value = document.getElementById("weight_value")
var age_value = document.getElementById("age_value")


var maleCard = document.getElementById("maleCard");
var femaleCard = document.getElementById("femaleCard");
var maleIsSelected = false;
var femaleIsSelected = false;

var modal = document.getElementById("resultModal");

var bmi_result = document.getElementById("bmi_result");
var bmi_val = document.getElementById("bmi_val");

height_value.innerHTML = slider.value;


function updateSlider() {
  if (height_value.value) {
    slider.value = height_value.value;
  } else {
    height_value.value = 0
    slider.value = 0; // default value
  }
}

slider.oninput = function () {
  height_value.value = this.value;
}


function addAge(){
  var currentValue = Number(age_value.value);
  var subtractValue = 1;
  var newValue = currentValue + subtractValue;
  if (newValue <= 110) {
    age_value.value = newValue;
  } 
}

function subtractAge(){
  var currentValue = Number(age_value.value);
  var subtractValue = 1;
  var newValue = currentValue - subtractValue;
  if (newValue >= 0) {
    age_value.value = newValue;
  } 
}

function addWeight(){
  var currentValue = Number(weight_value.value);
  var subtractValue = 1;
  var newValue = currentValue + subtractValue;
  if (newValue <= 110) {
    weight_value.value = newValue;
  } 
}

function subtractWeight(){
  var currentValue = Number(weight_value.value);
  var subtractValue = 1;
  var newValue = currentValue - subtractValue;
  if (newValue >= 0) {
    weight_value.value = newValue;
  } 
}


function selectAllText() {
  var input = document.getElementById("height_value");
  input.select();
} 

function selectAllTextWeight() {
  var input = document.getElementById("weight_value");
  input.select();
} 

function selectAllTextAge() {
  var input = document.getElementById("age_value");
  input.select();
} 


maleCard.addEventListener("click", function() {
  if (maleIsSelected) {
    maleCard.classList.remove("selectedCard");
    maleIsSelected = false;
  } else {
    maleCard.classList.add("selectedCard");
    femaleCard.classList.remove("selectedCard");
    maleIsSelected = true;
    femaleIsSelected = false;
  }
});

femaleCard.addEventListener("click", function() {
  if (femaleIsSelected) {
    femaleCard.classList.remove("selectedCard");
    femaleIsSelected = false;
  } else {
    femaleCard.classList.add("selectedCard");
    maleCard.classList.remove("selectedCard");
    femaleIsSelected = true;
    maleIsSelected = false;
  }
});

function onModalShown() {
  let count = 0;
  var heightMeters = height_value.value / 100;
  var bmi = weight_value.value / (heightMeters * heightMeters);
  
  bmi_result.innerHTML =""
  
  if(age_value.value<=0 || height_value.value <=0 || weight_value <=0){
    bmi_result.innerHTML = "Please provide positive value."
  } else if (!maleIsSelected && !femaleIsSelected) {
    bmi_result.innerHTML = "Please select your gender.";
  } else if (age_value <= 20) {
    const interval = setInterval(() => {
      count += 0.01;
      bmi_val.innerHTML = count.toFixed(2);
      if (count >= bmi) {
        clearInterval(interval);
        if (maleIsSelected) {
          if (bmi < 14.5) {
            bmi_result.innerHTML = "Underweight";
          } else if (bmi <= 20.8) {
            bmi_result.innerHTML ="Normal weight";
          } else if (bmi <= 24.9) {
            bmi_result.innerHTML ="Overweight";
          } else if (bmi <= 30) {
           bmi_result.innerHTML ="Obese";
          } else {
           bmi_result.innerHTML ="Severely obese";
          }
        } else {
          // femaleIsSelected is true
          if (bmi < 14.2) {
            bmi_result.innerHTML ="Underweight";
          } else if (bmi <= 20.3) {
            bmi_result.innerHTML ="Normal weight";
          } else if (bmi <= 24.4) {
            bmi_result.innerHTML ="Overweight";
          } else if (bmi <= 30) {
           bmi_result.innerHTML ="Obese";
          } else {
            bmi_result.innerHTML ="Severely obese";
          }
        }
      }
    }, 5);
    
  } else {
    const interval = setInterval(() => {
      count += 0.10;
      bmi_val.innerHTML = count.toFixed(2);
      if (count >= bmi) {
        clearInterval(interval);
        if (bmi < 18.5) {
          bmi_result.innerHTML ="Underweight";
         } else if (bmi <= 24.9) {
           bmi_result.innerHTML ="Normal weight";
         } else if (bmi <= 29.9) {
           bmi_result.innerHTML ="Overweight";
         } else {
           bmi_result.innerHTML ="Obese";
         }
      }
    }, 5);
  }
  
  
}

modal.addEventListener('shown.bs.modal', onModalShown);

