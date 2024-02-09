const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    const underbmi = document.querySelector('.under');
    const normalbmi = document.querySelector('.normal');
    const overbmi = document.querySelector('.red');
    if (height === '' || height<0 || isNaN(height)) {
        results.innerHTML = `Please enter a vaild height ${height}`;
    } else if( weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = `Please enter a vaild weight ${weight}`;
    }else{
        const bmi = ( weight / ((height*height)/10000)).toFixed(2);
        results.innerHTML = bmi;
        if(bmi < 18.6){
            underbmi.innerHTML = `Your BMI is ${bmi}. & You are Under Weight.`;
        }else if(bmi >= 18.6 || bmi <= 24.6){
            normalbmi.innerHTML = `Your BMI is ${bmi}. & You are Normal Range.`;
        }else{
            overbmi.innerHTML = `Your BMI is ${bmi}. & You are Over Weight.`;
        }
    }
});