import { choicesPicks } from "./Choices.js"
import { addCommentOne, addCommentTwo, addRecommendationContainer, addEncouragementContainer } from "./renders/Render.js"
import { darkBg, normalBg } from "./darkBg.js";
import { spinButton } from "./darkBg.js";

function inputMessages(){
  const body = document.querySelector('body')

  const addButton = document.querySelector(".add-messages");

  const mainContainer = document.querySelector('.main-container')

  const choicesButtons = document.querySelectorAll('.choices-container ul li')

  const choicesContainer = document.querySelector('.choices-container')
  
  const mainInputContainer = document.querySelector('.main-input-container')

  const inputContainer = document.querySelector('.input-container')

  window.addEventListener('click', handleClick, { passive: false });
  window.addEventListener('touchstart', handleClick, { passive: false });


  function handleClick(e) {
    if(e.target === mainInputContainer && choicesContainer.classList.contains('pick')){
      choicesContainer.classList.replace('pick', 'unpick');
      spinButton(addButton);
    } else if(e.target === mainInputContainer && mainInputContainer.classList.contains('open') || e.target === mainContainer || e.target === inputContainer){
      mainInputContainer.classList.replace('open', 'close');
      normalBg(mainContainer);
      addButton.classList.remove('dark');
      body.classList.remove('restrict-scroll');
    }
  }


  choicesButtons.forEach((button) => {

    button.addEventListener('click', () => {
      mainInputContainer.classList.replace('close', 'open')

      inputContainer.innerHTML = '';

      if(button.innerHTML === 'Add Comment 1'){
        addCommentOne()
      } else if(button.innerHTML === 'Add Comment 2') {
        addCommentTwo()
      } else if(button.innerHTML === 'Add Recommendation') {
        addRecommendationContainer()
      } else if(button.innerHTML === 'Add Encouragement'){
        addEncouragementContainer()
      }

      darkBg(mainContainer)
      choicesPicks(choicesContainer, mainInputContainer)
      spinButton(addButton)
      addButton.classList.add('dark')
      body.classList.add('restrict-scroll')
    })
  })
}

inputMessages()