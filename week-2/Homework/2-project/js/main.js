document.querySelector('#blueBtn').addEventListener('click', blueChanges);

function blueChanges() {
    document.querySelector('.jumbotron').style.backgroundColor = '#588fbd';
    document.querySelector('a.btn.btn-primary.btn-lrg').style.backgroundColor = '#ffa500';
    document.querySelector('.buttons .btn-secondary').style.backgroundColor = 'black';
    document.querySelector('.buttons .btn-secondary').style.color = 'white';
}

document.querySelector('#orangeBtn').addEventListener('click', orangeChanges);

function orangeChanges() {
    document.querySelector('.jumbotron').style.backgroundColor = '#f0ad4e';
    document.querySelector('a.btn.btn-primary.btn-lrg').style.backgroundColor = '#5751fd';
    document.querySelector('.buttons .btn-secondary').style.backgroundColor = '#31b0d5';}

document.querySelector('#greenBtn').addEventListener('click', greenChanges);

function greenChanges() {
    document.querySelector('.jumbotron').style.backgroundColor = '#87ca8a';
    document.querySelector('a.btn.btn-primary.btn-lrg').style.backgroundColor = 'black';
    document.querySelector('.buttons .btn-secondary').style.backgroundColor = '#8c9c08';}


document.querySelector('form .btn').addEventListener('click', submitFunction);

function submitFunction() {
// document.body.style.backgroundColor = 'yellow';

/* VALIDATE */

const email = document.querySelector('#exampleInputEmail1');
const name = document.querySelector('#example-text-input');
const description = document.querySelector('#exampleTextarea');

email.value.length === 0 && email.value.includes('@') ? email.style.borderColor = 'green' : email.style.borderColor = 'red';

name.value.length === 0 ? name.style.borderColor = 'green' : name.style.borderColor = 'red';

description.value.length === 0 ? description.style.borderColor = 'green' : description.style.borderColor = 'red';

}


/* For all the fields that invalid, it should make their background color `red`.
IF all the fields are valid, when you click **Submit** it should:

- Display an alert to thank you for filling out the form
- Blank out (make empty) all the text fields

**Important hint:** In your function that handles clicks on the `Submit` button you will need to call `event.preventDefault()` to stop the browser from refreshing the page. To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault
 */