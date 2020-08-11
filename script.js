const sections = document.querySelectorAll("section");
const empty = document.querySelector(".empty");
const gradients = [
  "linear-gradient(to right, #5a3f37, #2c7744)",
  "linear-gradient(to right, #cac531, #f3f9a7)",
  "linear-gradient(to right, #a8ff78, #78ffd6)",
  "linear-gradient(to right, #f2994a, #f2c94c)",
];

const options = {
  threshold: 0.7,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    console.log(entry);
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute("data-index");
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      width: coords.width,
      height: coords.height,
      top: coords.top,
      left: coords.left,
    };
    if (entry.isIntersecting) {
      empty.style.setProperty("left", `${directions.left}px`);
      empty.style.setProperty("top", `${directions.top}px`);
      empty.style.setProperty("width", `${directions.width}px`);
      empty.style.setProperty("height", `${directions.height}px`);
      empty.style.background = gradients[gradientIndex];
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});
