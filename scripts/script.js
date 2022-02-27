let currentPage = 1;

const main = document.getElementById("main-wrapper");
const pageIndicators = document.getElementsByClassName("page-indicator");

const clearIndicators = () => {
  pageIndicators.forEach((indicator) => {
    indicator.style.backgroundColor = "black";
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
