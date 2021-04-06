/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6 */
const pElements = document.querySelectorAll("p")
// console.log(pElements)
// pElements.forEach((p) => p.style.fontSize = '50px')

/*
    2. the first div element node
    --> should log the ".site-header" node
*/

const firstDiv = document.querySelector("div")
// console.log(firstDiv)

/*
    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node
*/

const jumbotronText = document.querySelector("#jumbotron-text")
// console.log(jumbotronText)

/*
    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3
*/

const allPElements = document.querySelectorAll(".primary-content p")
console.log(allPElements)





/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/



/* document.querySelector("#alertBtn").addEventListener('click', thanksForVisiting);

function thanksForVisiting() {
    alert('Thanks for visiting Bikes for Regugees!)
}

let alertButton = document.querySelector("#alertBtn")
alertButton.addEventListener("click", sayThanks);
function sayThanks(){
    alert( "Thanks for visiting Bikes for Refugees!")
} */

document.querySelector("#alertBtn").addEventListener('click', () => alert('Thanks for visiting Bikes for Regugees!'))

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

// document.querySelector('#bgrChangeBtn').addEventListener("click", changeColor)

// function changeColor() {
    // document.body.style.backgroundColor = 'orange'
// }

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

document.querySelector('#addTextBtn').addEventListener('click', addParagraph);

function addParagraph() {
    const learnMoreSection = document.querySelector('#mainArticles');
    const paragraph = document.createElement('p');
    paragraph.innerText = 'This is the additional paragraph that will be added into the document.';
    learnMoreSection.appendChild(paragraph);
}

// innerText = textContent

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/


document.querySelector('#largerLinksBtn').addEventListener('click', () => {
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(a => a.style.fontSize = '30px');
} )


/* ALI */
/* let largerLinksBtn = document.querySelector("#largerLinksBtn")
largerLinksBtn.addEventListener("click", largerText)

function largerText(){
    linkElements = document.querySelectorAll("a")
    console.log(linkElements)
    linkElements.forEach((a)=> a.style.fontSize = "30px")
} */


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

document.querySelector('#addArticleBtn').addEventListener('click', addText);

function addText() {
    const inputField = document.querySelector('.form-control.addArticle')
    const learnMoreSection = document.querySelector('#mainArticles');
    const paragraph = document.createElement('p');
    paragraph.textContent = inputField.value;
    learnMoreSection.appendChild(paragraph);
    inputField.value = ''
}

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again. PROMPT
*/

const differentColors = ["green", "black", "purple", "red", "orange"]

document.querySelector('#bgrChangeBtn').addEventListener("click", changeColorPushShift)

function changeColor() {
    const currentColor = document.body.style.backgroundColor
    const indexCurrent = differentColors.findIndex(c => c === currentColor)
    const nextColor = differentColors[indexCurrent + 1] || differentColors[0]
    document.body.style.backgroundColor = nextColor
}






function changeColorPushShift() {
    const color = differentColors[0];
    document.body.style.backgroundColor = color;
    differentColors.push(differentColors[0]);
    console.log('Moved to the end ' + differentColors);
    differentColors.shift(differentColors[0]);
    console.log('Deleted from the beginning ' + differentColors);
}



