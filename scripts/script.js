let currentPage = 1;

const main = document.getElementById("main-wrapper");
const pageIndicators = document.getElementsByClassName("page-indicator");

const setPageIndicator = () => {
  if (main.scrollTop < h) {
    pageIndicators[0].style.backgroundColor = "white";
    pageIndicators[1].style.backgroundColor = "black";
  } else if (main.scrollTop < h * 2) {
    pageIndicators[1].style.backgroundColor = "white";
    pageIndicators[0].style.backgroundColor = "black";
    pageIndicators[2].style.backgroundColor = "black";
  } else if (main.scrollTop < h * 3) {
    pageIndicators[2].style.backgroundColor = "white";
    pageIndicators[1].style.backgroundColor = "black";
    pageIndicators[3].style.backgroundColor = "black";
  } else if (main.scrollTop < h * 4) {
    pageIndicators[3].style.backgroundColor = "white";
    pageIndicators[2].style.backgroundColor = "black";
    pageIndicators[4].style.backgroundColor = "black";
  } else if (main.scrollTop < h * 5) {
    pageIndicators[4].style.backgroundColor = "white";
    pageIndicators[3].style.backgroundColor = "black";
  }
};

main.addEventListener("scroll", setPageIndicator);

setPageIndicator();
