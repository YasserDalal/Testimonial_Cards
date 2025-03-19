import { persons1, persons2, persons3, persons4 } from "../../data/data.js"
import { renderComments, recommendationContainer, encouragementContainer } from "./Render.js";

import { normalBg } from "../darkBg.js";


export function logics(textArea, button, name, role, profilePic1, profilePic2, profilePic3, thoughts){
  const image = document.querySelectorAll('.profile-pick-image-container img')
  let file = [];
  const relativeSrc1 = profilePic1.src.split('/').slice(-2).join('/'); 
  const relativeSrc2 = profilePic2.src.split('/').slice(-2).join('/');
  const relativeSrc3 = profilePic3.src.split('/').slice(-2).join('/');
  const mainInputContainer = document.querySelector('.main-input-container')

  const addButton = document.querySelector(".add-messages");

  const mainContainer = document.querySelector('.main-container')

  const body = document.querySelector('body')

  image.forEach((images) => {
    images.addEventListener('click', (e) => {
      if(images.classList.contains('profile-1')) {
        profilePic3.classList.remove('image-active')
        profilePic2.classList.remove('image-active')
        profilePic1.classList.add('image-active')
        file.push(`./${relativeSrc1}`)
      } else if(images.classList.contains('profile-2')){
        profilePic3.classList.remove('image-active')
        profilePic1.classList.remove('image-active')
        profilePic2.classList.add('image-active')
        file.push(`./${relativeSrc2}`)
      } else if(images.classList.contains('profile-3')){
        profilePic1.classList.remove('image-active')
        profilePic2.classList.remove('image-active')
        profilePic3.classList.add('image-active')
        file.push(`./${relativeSrc3}`)
      }
  })
  })

  const newObj = {
    name,
    role,
    image: '',
    messages: {
      comment: '',
      recommendation: ''
    }
  }
  button.addEventListener('click', () => {

      if(button.innerHTML === 'ADD COMMENT'){
        role.forEach((choice) => {
          if(choice.checked){
    
            newObj.name = name.value
            newObj.role = choice.value
            
            file.forEach((filename) => {
              newObj.image = filename
              newObj.messages.comment = textArea.value
              newObj.messages.recommendation = thoughts.value
            })
          }
        })
        persons1.push(newObj)
        mainInputContainer.classList.replace('open', 'close')
        normalBg(mainContainer)
        addButton.classList.remove('dark')
        body.classList.remove('restrict-scroll')

        renderComments(persons1, persons2)
      } else if(button.innerHTML === 'ADD COMMENT 2') {
        role.forEach((choice) => {
          if(choice.checked){
    
            newObj.name = name.value
            newObj.role = choice.value
            
            file.forEach((filename) => {
              newObj.image = filename
              newObj.messages.comment = textArea.value
              newObj.messages.recommendation = thoughts.value
            })
          }
        })
        persons2.push(newObj)
        mainInputContainer.classList.replace('open', 'close')
        normalBg(mainContainer)
        addButton.classList.remove('dark')
        body.classList.remove('restrict-scroll')

        renderComments(persons1, persons2)
      } else if(button.innerHTML === 'ADD RECOMMENDATION'){
        role.forEach((choice) => {
          if(choice.checked){
    
            newObj.name = name.value
            newObj.role = choice.value
            
            file.forEach((filename) => {
              newObj.image = filename
              newObj.messages.comment = textArea.value
              newObj.messages.recommendation = thoughts.value
            })
          }
          
        })

        persons3.push(newObj)
        mainInputContainer.classList.replace('open', 'close')
        normalBg(mainContainer)
        addButton.classList.remove('dark')
        body.classList.remove('restrict-scroll')

        recommendationContainer(persons3)
      } else if(button.innerHTML === 'ADD ENCOURAGEMENT'){
        role.forEach((choice) => {
          if(choice.checked){
    
            newObj.name = name.value
            newObj.role = choice.value
            
            file.forEach((filename) => {
              newObj.image = filename
              newObj.messages.comment = textArea.value
              newObj.messages.recommendation = thoughts.value
            })
          }
          
        })

        persons4.push(newObj)
        mainInputContainer.classList.replace('open', 'close')
        normalBg(mainContainer)
        addButton.classList.remove('dark')
        body.classList.remove('restrict-scroll')

        encouragementContainer(persons4)

        console.log(persons4)
      }
    
  })
  file.length = 0;


}