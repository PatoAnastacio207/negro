const scrollableContainer = document.querySelector("#scrollContainer");
const downArrow = document.querySelector("#down-arrow");
const scrollableElements = document.querySelectorAll(".scrollSnap");
const positions = [];
document
  .querySelectorAll(".scrollSnap")
  .forEach((element, index) => positions.push(element.offsetTop - 80));
let currentIndex = 0;

const indexOfSmallest = (a) => {
  let lowest = 0;
  for (let i = 1; i < a.length; i++) {
    if (a[i] < a[lowest]) lowest = i;
  }
  return lowest;
};

const getClosestSnap = (y, positions = []) => {
  const distances = positions.map((pos) => Math.abs(y - pos));
  return indexOfSmallest(distances);
};

downArrow.addEventListener("click", (e) => {
  const next = getClosestSnap(scrollableContainer.scrollTop, positions) + 1;
  console.log(next);
  if (next < positions.length && next > 0) {
    console.log(positions[next]);
    scrollableContainer.scroll({ top: positions[next] });
  }
});
