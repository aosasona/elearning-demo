/* Get the previous progress on page load */
const progressBar = document.getElementById("progressBar");
var savedProgress = localStorage.length;

var totalProgress = parseInt(document.querySelectorAll("#item").length);
onload = () => {
  savedProgress === 0 || savedProgress === null
    ? (progressContainer.style.display = "none")
    : (progressContainer.style.display = "block");
  var progressPercent = (savedProgress / totalProgress) * 100;
  progressBar.style.width = `${progressPercent}%`;
};

/* =============== MAIN PAGE IMAGE SLIDER =============== */
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

setInterval(imageSlide, 2500); //initiate the function and run it every 2.5 seconds

/* ================== Button Actions ================== */
const startBtn = document.getElementById("startCourse"); //Start button
const Menu = document.getElementById("menu"); //Menu page

startBtn.addEventListener("click", () => {
  Menu.scrollIntoView({ behavior: "smooth" });
});

const menuBtns = document.querySelectorAll("#mainMenu"); //main menu button

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    Menu.scrollIntoView({ behavior: "smooth" });
  });
});

/* =============== MENU ACTIONS ================= */
const items = document.querySelectorAll("#item");
const progressContainer = document.getElementById("progressContainer");
const notification = document.getElementById("notification");

items.forEach((item) => {
  item.addEventListener("click", () => {
    const itemKey = item.getAttribute("item-key");
    const fullViewId = String(`detail${itemKey}`);
    const fullViewDiv = document.getElementById(fullViewId);
    var savedProgressRecheck = localStorage.length;

    fullViewDiv.scrollIntoView({ behavior: "smooth" });
    var newProgress = parseInt(savedProgressRecheck) + 1;

    if (localStorage.getItem(`item${itemKey}`) !== null) {
      //DO NOTHING
      notification.innerText = "You have completed this module!";
      notification.className = "error";

      setTimeout(() => {
        notification.classList.add("notificationOut");
      }, 3000);
      setTimeout(() => {
        notification.className = "hidden";
      }, 3600);
    } else {
      if ((progressContainer.style.display = "none")) {
        progressContainer.style.display = "block";
      }
      localStorage.setItem(`item${itemKey}`, "true");
      var progressPercent = (newProgress / totalProgress) * 100;

      progressBar.style.width = `${progressPercent}%`;

      if (progressPercent === 100) {
        notification.innerText = `Course completed! 🎉`;
      } else {
        notification.innerText = `${progressPercent}% completion`;
      }

      notification.className = "success";

      setTimeout(() => {
        notification.classList.add("notificationOut");
      }, 3000);
      setTimeout(() => {
        notification.className = "hidden";
      }, 3600);
    }
  });
});
