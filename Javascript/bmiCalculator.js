// BMI = weight / height(2) (m(2))

function bmiCalculator(weight, height){
    // var bmi = weight / (height * height);
    var bmi = weight / Math.pow(height, 2)
    return Math.round(bmi);
}

bmiCalculator(65, 1.8);