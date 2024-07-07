const next = document.getElementById("next");
const previous = document.getElementById("previous");
const images = document.querySelectorAll(".img");

export function transition() {
  let imgIndex;
  // NEXT IMG BUTTON
  next.addEventListener("click", () => {
    let nextImgIndex;
    images.forEach((img) => {
      console.log(images);
      // get & hide current img & display next img
      const styles = window.getComputedStyle(img);
      if (styles.display !== "none") {
        const currentImg = img;
        currentImg.style.display = "none";
        imgIndex = parseInt(currentImg.getAttribute("data-index-number"));
        if (imgIndex == images.length) {
          nextImgIndex = 1;
        } else if (imgIndex < images.length) {
          nextImgIndex = imgIndex + 1;
        }
      }
    });
    const nextImg = document.getElementById(`img${nextImgIndex}`);
    nextImg.style.display = "block";
  });

  // PREVIOUS IMG BUTTON
  previous.addEventListener("click", () => {
    let prevImgIndex;
    images.forEach((img) => {
      // get & hide current img & display previous img
      const styles = window.getComputedStyle(img);
      if (styles.display !== "none") {
        const currentImg = img;
        currentImg.style.display = "none";
        imgIndex = parseInt(currentImg.getAttribute("data-index-number"));
        if (imgIndex == 1) {
          prevImgIndex = images.length;
        } else if (imgIndex > 1) {
          prevImgIndex = imgIndex - 1;
        }
      }
    });
    const prevImg = document.getElementById(`img${prevImgIndex}`);
    prevImg.style.display = "block";
  });
}
