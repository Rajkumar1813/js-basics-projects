let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body');
let cVal = document.querySelector('.val');
buttons.forEach((button) => {
    button.addEventListener('click', (e)=>{
        switch (e.target.id) {
            case 'gray':
                body.style.backgroundColor = e.target.id;
                cVal.innerHTML = e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                cVal.innerHTML = e.target.id;
                break;
            case 'green':
                body.style.backgroundColor = e.target.id;
                cVal.innerHTML = e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                cVal.innerHTML = e.target.id;
                break;
            case 'cyan':
                body.style.backgroundColor = e.target.id;
                cVal.innerHTML = e.target.id;
                break;
            case 'chartreuse':
                body.style.backgroundColor = e.target.id;
                cVal.innerHTML = e.target.id;
                break;
            case 'deeppink':
                body.style.backgroundColor = e.target.id;
                cVal.innerHTML = e.target.id;
                break;
            case 'red':
                body.style.backgroundColor = e.target.id;
                cVal.innerHTML = e.target.id;
                break;
            default:
                break;
        }
    })
});