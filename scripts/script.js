let currentPage = 1;

const main = document.getElementById("main-wrapper");
const pageIndicators = document.getElementsByClassName("page-indicator");

const clearIndicators = () => {
  pageIndicators.forEach((indicator) => {
    indicator.style.background = "none";
  });
};

const setPageIndicator = () => {
  if (main.scrollTop < h) {
    clearIndicators();
    pageIndicators[0].style.backgroundColor = "white";
  } else if (main.scrollTop < h * 2) {
    clearIndicators();
    pageIndicators[1].style.backgroundColor = "white";
  } else if (main.scrollTop < h * 3) {
    clearIndicators();
    pageIndicators[2].style.backgroundColor = "white";
  } else if (main.scrollTop < h * 4) {
    clearIndicators();
    pageIndicators[3].style.backgroundColor = "white";
  } else if (main.scrollTop < h * 5) {
    clearIndicators();
    pageIndicators[4].style.backgroundColor = "white";
  }
};

main.addEventListener("scroll", setPageIndicator);

setPageIndicator();

const carousel = document.getElementById("projects-carousel");

carousel.addEventListener("wheel", function (e) {
  console.log(e.deltaY);
  if (e.deltaY > 0) carousel.scrollLeft += 100;
  else carousel.scrollLeft -= 100;
});

const separation = document.getElementById("separation");
const alignment = document.getElementById("alignment");
const cohesion = document.getElementById("cohesion");

const separationInfo = document.getElementById("separation-info");
const alignmentInfo = document.getElementById("alignment-info");
const cohesionInfo = document.getElementById("cohesion-info");

separation.addEventListener("click", () => {
  //update sliders
  separationSlider.value(5);
  alignSlider.value(0);
  cohesionSlider.value(0);

  //hide other rules
  alignmentInfo.className = "hidden";
  cohesionInfo.className = "hidden";

  //reveal separation text
  separationInfo.className = "visible";
  setTimeout(() => {
    separationInfo.className = "hidden";
  }, 3000);
});

alignment.addEventListener("click", () => {
  //update sliders
  separationSlider.value(0);
  alignSlider.value(5);
  cohesionSlider.value(0);

  //hide other rules
  separationInfo.className = "hidden";
  cohesionInfo.className = "hidden";

  //reveal separation text
  alignmentInfo.className = "visible";
  setTimeout(() => {
    alignmentInfo.className = "hidden";
  }, 3000);
});

cohesion.addEventListener("click", () => {
  //update sliders
  separationSlider.value(0);
  alignSlider.value(0);
  cohesionSlider.value(5);

  //hide other rules
  alignmentInfo.className = "hidden";
  separationInfo.className = "hidden";

  //reveal separation text
  cohesionInfo.className = "visible";
  setTimeout(() => {
    cohesionInfo.className = "hidden";
  }, 3000);
});
