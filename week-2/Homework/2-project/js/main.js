/* PART 1 - Theme color changes */
/* BLUE BUTTON */

document.querySelector('#blueBtn').addEventListener('click', blueChanges);

function blueChanges() {
    document.querySelector('.jumbotron').style.backgroundColor = '#588fbd';
    document.querySelector('a.btn.btn-primary.btn-lrg').style.backgroundColor = '#ffa500';
    document.querySelector('.buttons .btn-secondary').style.backgroundColor = 'black';
    document.querySelector('.buttons .btn-secondary').style.color = 'white';
}

/* ORANGE BUTTON */

document.querySelector('#orangeBtn').addEventListener('click', orangeChanges);

function orangeChanges() {
    document.querySelector('.jumbotron').style.backgroundColor = '#f0ad4e';
    document.querySelector('a.btn.btn-primary.btn-lrg').style.backgroundColor = '#5751fd';
    document.querySelector('.buttons .btn-secondary').style.backgroundColor = '#31b0d5';}


/* GREEN BUTTON */    
document.querySelector('#greenBtn').addEventListener('click', greenChanges);

function greenChanges() {
    document.querySelector('.jumbotron').style.backgroundColor = '#87ca8a';
    document.querySelector('a.btn.btn-primary.btn-lrg').style.backgroundColor = 'black';
    document.querySelector('.buttons .btn-secondary').style.backgroundColor = '#8c9c08';}


/* PART 2 - Form Validation and Submit */

document.querySelector('form .btn').addEventListener('click', submitFunction);

function submitFunction() {
// document.body.style.backgroundColor = 'yellow'; -- testing

/* VALIDATE */
const email = document.querySelector('#exampleInputEmail1');
const name = document.querySelector('#example-text-input');
const description = document.querySelector('#exampleTextarea');
err = 0;

email.value.length > 0 && email.value.includes('@') ? email.style.borderColor = 'green' : (email.style.borderColor = 'red', err = 1);

name.value.length > 0 ? name.style.borderColor = 'green' : (name.style.borderColor = 'red', err = 1);

description.value.length > 0 ? description.style.borderColor = 'green' : (description.style.borderColor = 'red', err = 1);

if (err === 0) {
    alert('Thank you for filling out the form');
    email.value = '';
    name.value = '';
    description.value = '';
    event.preventDefault();
}
}