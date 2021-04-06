/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */


function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  // debugger;
  arrayOfPeople.forEach(people => {
    const nameH1 = document.createElement('h1');
    nameH1.innerText = people.name;
    content.appendChild(nameH1);
    const jobH2 = document.createElement('h2');
    jobH2.innerText = people.job;
    content.appendChild(jobH2)
  })
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  let content = document.querySelector('#content');
  const uList = document.createElement('ul');
  
  shopping.forEach(item => {
    const ulItem = document.createElement('li');
    ulItem.innerText = item;
    uList.appendChild(ulItem);
  })
  content.appendChild(uList)
  //Write your code in here
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  //Write your code in here
  const content = document.querySelector('#content');
  books[0].img = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442460745l/840._SY475_.jpg';
  books[1].img = 'https://brianchristian.org/images/The-Most-Human-Human-Paperback-Front-Cover.jpg';
  books[2].img = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1401432508l/4099.jpg';
  books.forEach(b => {
    const paragraph = document.createElement('p');
    paragraph.innerText = b.title + ' - ' + b.author;
    paragraph.style.fontWeight = '500';
    content.appendChild(paragraph)
    const ul = document.createElement('ul');
    const liAuthor = document.createElement('li');
    liAuthor.innerText = b.author;
    const liAlreadyRead = document.createElement('li');
    liAlreadyRead.innerText = b.alreadyRead;
    const imgBookCover = document.createElement('img');
    imgBookCover.alt = 'Book Cover Image';
    imgBookCover.src = books.img;
    b.alreadyRead === true ? paragraph.style.backgroundColor = 'green' : paragraph.style.backgroundColor = 'red';
    ul.appendChild(liAuthor)
    ul.appendChild(liAlreadyRead)
    ul.appendChild(imgBookCover)
    paragraph.appendChild(ul)
  })
}

// .setAttribute ('src', books.img)

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
