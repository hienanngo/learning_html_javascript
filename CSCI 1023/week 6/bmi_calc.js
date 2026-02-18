function bmi_calc(weight, height) {
    let bmi = weight / (height * height) * 703;
    return bmi;
}

function bmi_category(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

function display_bmi() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let bmi = bmi_calc(weight, height);
    let category = bmi_category(bmi);
    document.getElementById("bmioutput").value = bmi.toFixed(2);
    document.getElementById("categoryoutput").value = category;
}
