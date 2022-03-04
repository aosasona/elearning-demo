const mainImages = document.querySelectorAll(".mainImage");
var currentIndex = 0; // current index counter

const imageSlide = () => {
  let i;

  //Set all the images to not display (1 has been set to display by default)
  for (i = 0; i < mainImages.length; i++) {
    mainImages[i].style.display = "none";
  }

  currentIndex++; //increase the current index

  //If the current index is larger than the mainImages array length, reset it to 0
  currentIndex >= mainImages.length
    ? (currentIndex = 0)
    : (currentIndex = currentIndex);

  //change the image to the current index to visible
  mainImages[currentIndex].style.display = "block";
};

setInterval(imageSlide, 2000); //initiate the function and run it every 2 seconds
