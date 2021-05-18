const images = [
  "./img/img1.jpg",
  "./img/img2.jpg",
  "./img/img3.jpg",
  "./img/img4.jpg",
  "./img/img5.jpg",
  "./img/img6.jpg",
  "./img/img7.jpg",
  "./img/img8.jpg",
  "./img/img9.jpg",
  "./img/img10.jpg",
  "./img/img11.jpg",
];

let img = document.querySelector("img");
let run = true;

const showNext = (imgPool) => {
  const currentImage = document.querySelector("img").getAttribute("src");
  let currentIndex = imgPool.indexOf(currentImage);
  console.log("Previous photo index" + imgPool.indexOf(currentImage));
  currentIndex === imgPool.length - 1
    ? (currentIndex = 0)
    : (currentIndex += 1);
  console.log("New index" + currentIndex);
  img.setAttribute("src", imgPool[currentIndex]);
  run = false;
};

const showNextAuto = (imgPool) => {
  go = setInterval(() => showNext(imgPool), 1000);
  run = true;
};

const showPrevious = (imgPool) => {
  const currentImage = document.querySelector("img").getAttribute("src");
  let currentIndex = imgPool.indexOf(currentImage);
  console.log("Previous photo index" + imgPool.indexOf(currentImage));
  currentIndex === 0
    ? (currentIndex = imgPool.length - 1)
    : (currentIndex -= 1);
  console.log("New index" + currentIndex);
  img.setAttribute("src", imgPool[currentIndex]);
  run = false;
};

const showPreviousAuto = (imgPool) => {
  go = setInterval(() => showPrevious(imgPool), 1000);
  run = true;
};

const stop = () => {
  if ((run = true)) {
    clearInterval(go);
    run = false;
  }
};

document
  .querySelector("#backward")
  .addEventListener("click", () => showPrevious(images));

document
  .querySelector("#forward")
  .addEventListener("click", () => showNext(images));

document
  .querySelector("#autoBack")
  .addEventListener("click", () => showPreviousAuto(images));

document
  .querySelector("#autoForward")
  .addEventListener("click", () => showNextAuto(images));

document.querySelector("#stop").addEventListener("click", stop);
