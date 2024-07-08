const next = document.getElementById("next");
const previous = document.getElementById("previous");
const images = document.querySelectorAll(".img");

export function transition() {
  let imgIndex;
  // NEXT IMG BUTTON
  next.addEventListener("click", () => {
    let navDot;
    let nextImgIndex;
    images.forEach((img) => {
      console.log(images);
      // get & hide current img & display next img
      const styles = window.getComputedStyle(img);
      if (styles.display !== "none") {
        const currentImg = img;
        currentImg.style.display = "none";
        imgIndex = parseInt(currentImg.getAttribute("data-index-number"));
        navDot = document.getElementById(`dot${imgIndex}`);
        navDot.style.backgroundColor = "whitesmoke";
        if (imgIndex == images.length) {
          nextImgIndex = 1;
        } else if (imgIndex < images.length) {
          nextImgIndex = imgIndex + 1;
        }
      }
    });
    const nextImg = document.getElementById(`img${nextImgIndex}`);
    navDot = document.getElementById(`dot${nextImgIndex}`);
    navDot.style.backgroundColor = "red";
    nextImg.style.display = "block";
  });

  // PREVIOUS IMG BUTTON
  previous.addEventListener("click", () => {
    let prevImgIndex;
    let navDot;
    images.forEach((img) => {
      // get & hide current img & display previous img
      const styles = window.getComputedStyle(img);
      if (styles.display !== "none") {
        const currentImg = img;
        currentImg.style.display = "none";
        imgIndex = parseInt(currentImg.getAttribute("data-index-number"));
        navDot = document.getElementById(`dot${imgIndex}`);
        navDot.style.backgroundColor = "whitesmoke";
        if (imgIndex == 1) {
          prevImgIndex = images.length;
        } else if (imgIndex > 1) {
          prevImgIndex = imgIndex - 1;
        }
      }
    });
    const prevImg = document.getElementById(`img${prevImgIndex}`);
    navDot = document.getElementById(`dot${prevImgIndex}`);
    navDot.style.backgroundColor = "red";
    prevImg.style.display = "block";
  });
}

function timedTransition() {
  next.click();
}

export function transitionControl() {
  let intervalId;
  document.addEventListener("DOMContentLoaded", () => {
    intervalId = setInterval(timedTransition, 5000);
  });
  next.addEventListener("mouseover", () => {
    clearInterval(intervalId);
  });
  next.addEventListener("mouseleave", () => {
    intervalId = setInterval(timedTransition, 5000);
  });

  previous.addEventListener("mouseover", () => {
    clearInterval(intervalId);
  });

  previous.addEventListener("mouseleave", () => {
    intervalId = setInterval(timedTransition, 5000);
  });
}
