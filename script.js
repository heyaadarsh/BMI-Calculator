const form = document.querySelector('form');

let bmi;


form.addEventListener('submit', (e) => {
    e.preventDefault();


    const h = parseInt(document.querySelector('#height').value);
    const w = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(h=='' || h<=0 || isNaN(h)){
        results.innerHTML = "Please enter valid height";
    }
    else if(w=='' || w<=0 || isNaN(w)){
        results.innerHTML = "Please enter valid weight";
    }
    else{
        bmi = (w / ((h*h)/10000)).toFixed(2);
    }

    if(bmi<18.5){
        results.innerHTML = `<span>BMI: ${bmi} - Underweight</span>`;
    }
    else if(bmi>=18.5 && bmi<=22.9){
        results.innerHTML = `<span>BMI: ${bmi} - Normal Range</span>`;
    }
    else if(bmi>=23 && bmi<=24.9){
        results.innerHTML = `<span>BMI: ${bmi} - Overweight</span>`;
    }
    else if(bmi>=25 && bmi<=29.9){
        results.innerHTML = `<span>BMI: ${bmi} - Obese 1</span>`;
    }
    else if (bmi>30){
        results.innerHTML = `<span>BMI: ${bmi} - Obese 2</span>`;
    }
    else{
        results.innerHTML = `<span>BMI: ${bmi}</span>`;
    }
});