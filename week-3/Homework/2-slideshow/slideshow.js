const images = [
  "./img/img1.jpg",
  "./img/img2.jpg",
  "./img/img3.jpg",
  "./img/img4.jpg",
  "./img/img5.jpg",
];

let img = document.querySelector("img");

const showNext = (imgPool) => {
  const currentImage = document.querySelector("img").getAttribute("src");
  console.log("Next photo plz");
  console.log(currentImage);
  let currentIndex = imgPool.indexOf(currentImage);
  console.log(imgPool.indexOf(currentImage));
  currentIndex === imgPool.length - 1
    ? (currentIndex = 0)
    : (currentIndex += 1);

  console.log("New index" + currentIndex);

  img.setAttribute("src", imgPool[currentIndex]);
};

const showPrevious = (imgPool) => {
  const currentImage = document.querySelector("img").getAttribute("src");
  console.log(currentImage);
  let currentIndex = imgPool.indexOf(currentImage);
  console.log(imgPool.indexOf(currentImage));
  currentIndex === 0
    ? (currentIndex = imgPool.length - 1)
    : (currentIndex -= 1);

  console.log("New index" + currentIndex);

  img.setAttribute("src", imgPool[currentIndex]);
};

document
  .querySelector("#backward")
  .addEventListener("click", () => showPrevious(images));

document
  .querySelector("#forward")
  .addEventListener("click", () => showNext(images));
