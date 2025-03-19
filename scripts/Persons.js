import { persons4 } from "../data/data.js";

export function pickPersons() {
  const rightArrow = document.querySelector(".right-arrow");
  const leftArrow = document.querySelector(".left-arrow");
  const swipeContainer = document.querySelector(".swipe-container");
  const swipeName = document.querySelector('.person-inner-container')

  const listsOfMessages = document.querySelector('.lists-of-messages')
  
  let index = 0; // Dapat ilabas para hindi nare-reset
  let indexlist;  //

  let indexName = 1;

  let indexMessage = 1
  rightArrow.addEventListener("click", () => {
    if(window.innerWidth < 445 && window.innerWidth >= 400){
      indexlist = 345
    } else if(window.innerWidth < 470 && window.innerWidth >= 445) {
      indexlist = 365
    } else if(window.innerWidth < 500 && window.innerWidth >= 470){
      indexlist = 429
    } else if(window.innerWidth < 540 && window.innerWidth >= 500){
      indexlist = 460
    } else if(window.innerWidth < 575 && window.innerWidth >= 540){
      indexlist = 490
    } else {
      indexlist = 815
    }
    if (index < persons4.length - 2) { // Hanggang sa last person lang
      index++;
      indexName++;
      indexMessage++
      indexlist++
      swipeContainer.style.transform = `translateX(-${index * 90}px)`;
      swipeName.style.transform = `translateX(-${indexName * 260}px)`;

      listsOfMessages.style.transform = `translateX(-${indexMessage * indexlist}px)`
      indexlist--
    }
  });
  leftArrow.addEventListener("click", () => {
    if(window.innerWidth < 445 && window.innerWidth >= 400){
      indexlist = 345
    } else if(window.innerWidth < 470 && window.innerWidth >= 445) {
      indexlist = 365
    } else if(window.innerWidth < 500 && window.innerWidth >= 470){
      indexlist = 429
    } else if(window.innerWidth < 540 && window.innerWidth >= 500){
      indexlist = 460
    } else if(window.innerWidth < 575 && window.innerWidth >= 540){
      indexlist = 490
    } else {
      indexlist = 815
    }
    if (index > 0) { 
      index--;
      indexName--;
      indexMessage--;
      swipeContainer.style.transform = `translateX(-${index * 90}px)`;
      swipeName.style.transform = `translateX(-${indexName * 260}px)`;

      listsOfMessages.style.transform = `translateX(-${indexMessage * indexlist}px)`
      indexlist--;
    } else {
      index--;
      indexName--;
      indexMessage--;
      swipeContainer.style.transform = `translateX(90px)`;
      swipeName.style.transform = `translateX(-${indexName * 260}px)`;
      listsOfMessages.style.transform = `translateX(-${indexMessage * indexlist}px)`
      indexlist--;
      if(index < -1){
        index++
        indexName++;
        indexMessage++
        indexlist++
      }
    }
  });
}
