document.getElementById('submit').addEventListener('click', calculateBMI);

function calculateBMI() {
    let weight = document.getElementById('kg').value;
    let height = (document.getElementById('cm').value) / 100;
    let bmi = Math.round((weight / (Math.pow(height, 2))) * 100) / 100;
    document.getElementById('calculated').innerHTML = bmi;
    document.getElementById('result').innerHTML = ifHealthy(bmi)
} 

function ifHealthy(yourbmi) {
    if (yourbmi < 18.5) {
        return '<span style="color: red">zbyt niska</span>'
    }
    else if (yourbmi >= 18.5 && yourbmi < 25) {
        return '<span style="color: green">prawidłowa</span>'
    }
    else {
        return '<span style="color: red">zbyt wysoka</span>'
    }
}


