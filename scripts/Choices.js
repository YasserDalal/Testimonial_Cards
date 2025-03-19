import { spinButton } from "./darkBg.js";

export function addedButtonToggle() {
  const addButton = document.querySelector(".add-messages");
  const choicesContainer = document.querySelector(".choices-container");

  const mainCommentContainer = document.querySelector('.main-comment-container')
  const mainEncourageContainer = document.querySelector('.main-encouragement-container')

  const mainRecommendation = document.querySelector('.main-recommendation-container')

  const commentContainer = document.querySelector('.comments-container')

  window.addEventListener('click', (e) => {
    if ((e.target === mainCommentContainer || e.target === mainEncourageContainer || e.target === commentContainer || e.target === mainRecommendation) && choicesContainer.classList.contains("pick")) {
      choicesContainer.classList.replace("pick", "unpick");

      choicesContainer.addEventListener(
        "animationend",
        () => {
          if (choicesContainer.classList.contains("unpick")) {
              choicesContainer.style.opacity = "0";
              choicesContainer.style.display = "none";
              choicesContainer.style.border = "none";
          }
        },
        { once: true }
      );
    }
  })
  addButton.addEventListener("click", () => {
    spinButton(addButton)
    if (choicesContainer.classList.contains("pick")) {
      choicesContainer.classList.replace("pick", "unpick");

      choicesContainer.addEventListener(
        "animationend",
        () => {
          if (choicesContainer.classList.contains("unpick")) {
              choicesContainer.style.opacity = "0";
              choicesContainer.style.display = "none";
              choicesContainer.style.border = "none";
          }
        },
        { once: true }
      );
    } else {
        spinButton(addButton)
        choicesContainer.style.opacity = "1";
        choicesContainer.style.display = "flex";
        choicesContainer.style.border = "1px solid black";
        choicesContainer.classList.replace("unpick", "pick");
    }
  });
}


export function choicesPicks(choicesContainer, mainInputContainer) {
  if (choicesContainer.classList.contains("pick") && mainInputContainer.classList.contains("open")) {
    choicesContainer.classList.replace("pick", "unpick");

    choicesContainer.addEventListener(
      "animationend",
      () => {
          if (choicesContainer.classList.contains("pick")) {
            return;
          } else {
            choicesContainer.style.opacity = "0";
            choicesContainer.style.display = "none";
            choicesContainer.style.border = "none";
          };
      }
    );
  } else {
    if (!choicesContainer.classList.contains("unpick")) {
      choicesContainer.style.opacity = "0";
      choicesContainer.style.display = "flex";
      choicesContainer.style.border = "1px solid black";

      requestAnimationFrame(() => {
          choicesContainer.style.opacity = "1";
          choicesContainer.classList.replace("unpick", "pick");
      });
    }
  }
}
