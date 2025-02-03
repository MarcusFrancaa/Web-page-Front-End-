const form = document.getElementById('Form')
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const phoneregex = /^\(\d{2}\) 9 \d{4}-\d{4}$/
const nameregex = /^[A-Za-zÀ-ÿ\s]+$/;
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block'
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none'

}

function namevalidate() {
    if (campos[0].value.length < 4 || !nameregex.test(campos[0].value)) {
        setError(0)
    }
    else {
        removeError(0)
    }
}


function cpfvalidate() {
    if (campos[1].value.length < 14 || !cpfRegex.test(campos[1].value)) {
        setError(1)
    }
    else {
        removeError(1)
    }
}

function emailvalidate() {
    if (!emailregex.test(campos[2].value)) {
        setError(2)
    }
    else {
        removeError(2)
    }
}
function phonevalidate() {
    if (campos[3].value.length < 16|| !phoneregex.test(campos[3].value)) {
        setError(3)
    }
    else {
        removeError(3)
    }
}
















