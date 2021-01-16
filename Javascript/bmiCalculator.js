// BMI = weight / height(2) (m(2))

function bmiCalculator (weight, height) {

    var interpreation; 

    var bmi = weight / Math.pow(height, 2);

    bmi = Math.round(bmi);
    
    if ( bmi < 18.5 ){
    return "your BMI is " + bmi + " so you are underweight"
    } 
    if (bmi> 18.5 && bmi <= 24.9){
    return  " your BMI is" + bmi + " so you have a normal weight. "
    } 
    else{ (bmi > 24.9) 
    return " your BMI is" + bmi + " so you are overweight."
    }
    
    return interpreation;
};

bmiCalculator(60, 2);