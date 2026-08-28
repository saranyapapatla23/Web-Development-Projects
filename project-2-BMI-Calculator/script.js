const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");

const calculateBtn = document.getElementById("calculateBtn");

const bmiResult = document.getElementById("bmiResult");
const status = document.getElementById("status");
const reset = document.getElementById("resetBtn");

// Function to calculate BMI
function calculateBMI(height, weight) {

    const heightInMeters = height / 100;

    const bmi = weight / (heightInMeters * heightInMeters);

    return bmi;
}

reset.addEventListener("click", function () {

    heightInput.value = "";
    weightInput.value = "";

    bmiResult.textContent = "";
    status.textContent = "";
});

calculateBtn.addEventListener("click", function () {

    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);
   
     if (height <= 0 || weight <= 0) { //Validation checck

    bmiResult.textContent = "Please enter valid height and weight.";
    status.textContent = "";

    return;
    }

    const bmi = calculateBMI(height, weight);

    bmiResult.textContent = "Your BMI is: " + bmi.toFixed(2);
    status.textContent = "Status :" + getHealthStatus(bmi);

    function getHealthStatus(bmi) {

    if (bmi < 18.5) {
        return "Underweight";
    }
    else if (bmi < 25) {
        return "Normal weight";
    }
    else if (bmi < 30) {
        return "Overweight";
    }
    else {
        return "Obese";
    }
}

});

// clicking enter should work rather than cursor

heightInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        weightInput.focus();
    }

});
weightInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        calculateBtn.click();
    }

});
