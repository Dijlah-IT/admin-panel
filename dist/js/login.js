const tabBtns = document.querySelectorAll(".tabs__btn");
const tabContents = document.querySelectorAll(".tabs__content");

for (const [index, value] of tabBtns.entries()) {
  value.addEventListener("click", () => {
    for (const tab of tabContents) {
      tab.classList.remove("active");
    }
    for (const btn of tabBtns) {
      btn.classList.remove("active");
    }
    tabContents[index].classList.add("active");
    tabBtns[index].classList.add("active");
  });
}
