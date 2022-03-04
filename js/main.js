const mainImages = document.querySelectorAll(".mainImage");
const imageArray = [];

for (var i = 0; i < mainImages.length; i++) {
  imageArray.push(i);
  var imgId = "img" + (i + 1);
  var formatImg = String(imgId);

  const imgStyle = document.getElementById(formatImg);

  if (imgStyle.classList.contains("hidden")) {
  }
}

