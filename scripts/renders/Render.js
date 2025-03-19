import { persons1, persons3, persons4 } from "../../data/data.js";
import { logics } from "./Logic.js";

import { pickPersons } from "../Persons.js";

// add logics here

// for comment1
export function renderComments(persons1, persons2) {
  let container = document.querySelector('.comments-container');

  let html = persons1.map(person => `
    <div class="comment-1">
      <div class="comment-message-1">
        <div class="comment-message-texts">${person.messages.comment}</div>
        <div class="recommendation-texts">${person.messages.recommendation}</div>
        <div class="arrow"></div>
      </div>
      <div class="comment-profile">
        <div class="comment-image">
          <img src=${person.image} alt="">
        </div>
        <div class="profile-details">
          <div class="profile-name">${person.name}</div>
          <div class="profile-role">${person.role}</div>
        </div>
      </div>
    </div>
  `).join("");

  html += persons2.map(person =>`
    <div class="comment-2">
      <div class="comment-message-2">
        <div class="comment-message-texts">${person.messages.comment}</div>
        <div class="recommendation-texts"></div>
      </div>
      <div class="comment-profile">
        <div class="comment-image"><img src=${person.image} alt=""></div>
        <div class="profile-details">
          <div class="profile-name">${person.name}</div>
          <div class="profile-role">${person.role}</div>
        </div>
      </div>
    </div>
  `).join('');

  container.innerHTML = html;
}


// for recommendationContainer
export function recommendationContainer(persons3){
  let container = document.querySelector('.main-recommendation-container')

  let html = persons3.map((person) =>
    `
      <div class="recommendation-container">
        <img class="profile-picture" src=${person.image} alt=''>
        <div class="message">
          <div class="star-ratings">
            <i class="fa-solid fa-star star"></i>
            <i class="fa-solid fa-star star"></i>
            <i class="fa-solid fa-star star"></i>
            <i class="fa-solid fa-star star"></i>
            <i class="fa-solid fa-star star"></i>
          </div>
          <div class="profile-name">${person.name}</div>
          <div class="profile-role">${person.role} </div>
          <div class="recommendation-message">
            ${person.messages.comment}
          </div>
        </div>
      </div>
  `
  ).join('')


  container.innerHTML = html;

}

// for encouragementContainer
export function encouragementContainer(persons4){
  let container = document.querySelector('.encouragement-message')


  let html = `
      <div class="inner-encouragement-message">
        <div class="lists-of-messages">
        </div>
      </div>
    </div>
    <div class="persons-container">
      <div class="left-arrow">
        &#60;
      </div>
      <div class="persons-profile-pictures">
        <div class="unblurred"></div>
        <div class="blurred">
          <div class="blurred1"></div>
            <div class="swipe-container">
            
            </div>
          <div class="blurred2"></div>
        </div>
        <div class="person-profile-names">
          <div class="person-inner-container">

          </div>
        </div>
    </div>
    <div class="right-arrow">
        &#62;
    </div> 
  </div>
    
    
  `


  container.innerHTML = html;

  persons4.forEach((person) => {
    document.querySelector('.swipe-container')
      .innerHTML += `
        <img src='${person.image}'>
      `

    document.querySelector('.person-inner-container')
      .innerHTML += `
        <div>${person.name}</div>
      `
    
      document.querySelector('.lists-of-messages').innerHTML += `
        <div>${person.messages.comment}</div>
      `
  })
  pickPersons()
}

//-------------------------------




// for add comment1
export function addCommentOne(){
  const inputContainer = document.querySelector('.input-container')

  let html = `
    <div class="inner-input-container for-comment-1">
      <div class="header-modal">ADD COMMENT 1</div>
      <div class="message-container">
        <textarea class="input-comment-1" name="input-comment-1"></textarea>
      </div>
      <div class="container">
        <div class="name-thoughts-container">
          <input type="text" name="name" placeholder="Name" class="input-name" required>

          <div class="thoughts-container">
            <label for="thoughts" class="thoughts">Thoughts?</label>
            <select name="thoughts" id="thoughts" class='select-thoughts'>
              <option value="Highly recommended">Highly recommended</option>
              <option value="Perfect">Perfect</option>
              <option value="Uhmm it's not bad">Uhmm it's not bad</option>
              <option value="This is the worst!">This is the worst</option>
              </select>
          </div>
        </div>
        <div>
          <div class="role-container">
            <label>
            <input type="radio" name="role" value="Cloud Engineer" class="role">  <span class="radio-label">
            Cloud Engineer</span></label>
            <label><input type="radio" name="role" value="Senior Full Stack Engineer" class="role"> <span class="radio-label">
            Senior FullStack Engineer</span></label>
            <label><input type="radio" name="role" value="DevOps Engineer" class="role"> <span class="radio-label">
            DevOps Engineer</span></label>
          </div>
            <div>
              <p>Choose your profile</p>

              <div class="profile-pick-image-container">
                <img class="profile-1" src="${persons1[0].image}">
                <img class="profile-2" src="${persons1[1].image}">
                <img class="profile-3" src="${persons1[2].image}">
              </div>
              
            </div>
        </div>
      </div>
      <div class="button-container">
        <button class='add-comment-1'>ADD COMMENT</button>
      </div>
    </div>
  ` 

  inputContainer.innerHTML += html

  const textArea = document.querySelector('.inner-input-container .input-comment-1')

  const button = document.querySelector('.add-comment-1')

  const name = document.querySelector('.input-name')

  const role = document.querySelectorAll('.role')

  const profilePic1 = document.querySelector('.profile-1')

  const profilePic2 = document.querySelector('.profile-2')

  const profilePic3 = document.querySelector('.profile-3')

  const thoughts = document.querySelector('.select-thoughts')


  logics(textArea, button, name, role, profilePic1, profilePic2, profilePic3, thoughts)

}

// for add comment2
export function addCommentTwo(){
  const inputContainer = document.querySelector('.input-container')

  let html = `
    <div class="inner-input-container for-comment-2">
      <div class="header-modal">ADD COMMENT 2</div>
      <div class="message-container">
        <textarea class="input-comment-1" name="input-comment-1"></textarea>
      </div>
      <div class="container">
        <div class="name-thoughts-container">
          <input type="text" name="name" placeholder="Name" class="input-name" required>

          <div class="thoughts-container">
            <label for="thoughts" class="thoughts">Thoughts?</label>
            <select name="thoughts" id="thoughts" class='select-thoughts'>
              <option value="Highly recommended">Highly recommended</option>
              <option value="Perfect">Perfect</option>
              <option value="Uhmm it's not bad">Uhmm it's not bad</option>
              <option value="This is the worst!">This is the worst</option>
              </select>
          </div>
        </div>
        <div>
          <div class="role-container">
            <label>
            <input type="radio" name="role" value="Cloud Engineer" class="role">  <span class="radio-label">
            Cloud Engineer</span></label>
            <label><input type="radio" name="role" value="Senior Full Stack Engineer" class="role"> <span class="radio-label">
            Senior FullStack Engineer</span></label>
            <label><input type="radio" name="role" value="DevOps Engineer" class="role"> <span class="radio-label">
            DevOps Engineer</span></label>
          </div>
            <div>
              <p>Choose your profile</p>

              <div class="profile-pick-image-container">
                <img class="profile-1" src="${persons1[0].image}">
                <img class="profile-2" src="${persons1[1].image}">
                <img class="profile-3" src="${persons1[2].image}">
              </div>
              
            </div>
        </div>
      </div>
      <div class="button-container">
        <button class='add-comment-1'>ADD COMMENT 2</button>
      </div>
    </div>
  ` 

  inputContainer.innerHTML += html

  const textArea = document.querySelector('.inner-input-container .input-comment-1')

  const button = document.querySelector('.inner-input-container .add-comment-1')

  const name = document.querySelector('.input-name')

  const role = document.querySelectorAll('.role')

  const profilePic1 = document.querySelector('.profile-1')

  const profilePic2 = document.querySelector('.profile-2')

  const profilePic3 = document.querySelector('.profile-3')

  const thoughts = document.querySelector('.select-thoughts')


  logics(textArea, button, name, role, profilePic1, profilePic2, profilePic3, thoughts)

}

// for add recommendationContainer2
export function addRecommendationContainer(){
  const inputContainer = document.querySelector('.input-container')

  let html = `
    <div class="inner-input-container for-recommendation">
      <div class="header-modal">ADD RECOMMENDATION</div>
      <div class="message-container">
        <textarea class="input-comment-1" name="input-comment-1"></textarea>
      </div>
      <div class="container">
        <div class="name-thoughts-container">
          <input type="text" name="name" placeholder="Name" class="input-name">

          <div class="thoughts-container">
            <label for="thoughts" class="thoughts">Thoughts?</label>
            <select name="thoughts" id="thoughts" class='select-thoughts'>
              <option value="Highly recommended">Highly recommended</option>
              <option value="Perfect">Perfect</option>
              <option value="Uhmm it's not bad">Uhmm it's not bad</option>
              <option value="This is the worst!">This is the worst</option>
              </select>
          </div>
        </div>
        <div>
          <div class="role-container">
            <label>
            <input type="radio" name="role" value="Cloud Engineer" class="role">  <span class="radio-label">
            Cloud Engineer</span></label>
            <label><input type="radio" name="role" value="Senior Full Stack Engineer" class="role"> <span class="radio-label">
            Senior FullStack Engineer</span></label>
            <label><input type="radio" name="role" value="DevOps Engineer" class="role"> <span class="radio-label">
            DevOps Engineer</span></label>
          </div>
            <div>
              <p>Choose your profile</p>

              <div class="profile-pick-image-container">
                <img class="profile-1" src="${persons1[0].image}">
                <img class="profile-2" src="${persons1[1].image}">
                <img class="profile-3" src="${persons1[2].image}">
              </div>
              
            </div>
        </div>
      </div>
      <div class="button-container">
        <button class='add-comment-1'>ADD RECOMMENDATION</button>
      </div>
    </div>
  ` 

  inputContainer.innerHTML = html

  const textArea = document.querySelector('.inner-input-container .input-comment-1')

  const button = document.querySelector('.inner-input-container .add-comment-1')

  const name = document.querySelector('.input-name')

  const role = document.querySelectorAll('.role')

  const profilePic1 = document.querySelector('.profile-1')

  const profilePic2 = document.querySelector('.profile-2')

  const profilePic3 = document.querySelector('.profile-3')

  const thoughts = document.querySelector('.select-thoughts')


  logics(textArea, button, name, role, profilePic1, profilePic2, profilePic3, thoughts)

}

// for add encouragementContainer
export function addEncouragementContainer(){
  const inputContainer = document.querySelector('.input-container')

  let html = `
    <div class="inner-input-container for-encouragement">
      <div class="header-modal">ADD ENCOURAGEMENT</div>
      <div class="message-container">
        <textarea class="input-comment-1" name="input-comment-1"></textarea>
      </div>
      <div class="container">
        <div class="name-thoughts-container">
          <input type="text" name="name" placeholder="Name" class="input-name">

          <div class="thoughts-container">
            <label for="thoughts" class="thoughts">Thoughts?</label>
            <select name="thoughts" id="thoughts" class='select-thoughts'>
              <option value="Highly recommended">Highly recommended</option>
              <option value="Perfect">Perfect</option>
              <option value="Uhmm it's not bad">Uhmm it's not bad</option>
              <option value="This is the worst!">This is the worst</option>
              </select>
          </div>
        </div>
        <div>
          <div class="role-container">
            <label>
            <input type="radio" name="role" value="Cloud Engineer" class="role">  <span class="radio-label">
            Cloud Engineer</span></label>
            <label><input type="radio" name="role" value="Senior Full Stack Engineer" class="role"> <span class="radio-label">
            Senior FullStack Engineer</span></label>
            <label><input type="radio" name="role" value="DevOps Engineer" class="role"> <span class="radio-label">
            DevOps Engineer</span></label>
          </div>
            <div>
              <p>Choose your profile</p>

              <div class="profile-pick-image-container">
                <img class="profile-1" src="${persons1[0].image}">
                <img class="profile-2" src="${persons1[1].image}">
                <img class="profile-3" src="${persons1[2].image}">
              </div>
              
            </div>
        </div>
      </div>
      <div class="button-container">
        <button class='add-comment-1'>ADD ENCOURAGEMENT</button>
      </div>
    </div>
  `
  inputContainer.innerHTML += html

  const textArea = document.querySelector('.inner-input-container .input-comment-1')

  const button = document.querySelector('.inner-input-container .add-comment-1')

  const name = document.querySelector('.input-name')

  const role = document.querySelectorAll('.role')

  const profilePic1 = document.querySelector('.profile-1')

  const profilePic2 = document.querySelector('.profile-2')

  const profilePic3 = document.querySelector('.profile-3')

  const thoughts = document.querySelector('.select-thoughts')


  logics(textArea, button, name, role, profilePic1, profilePic2, profilePic3, thoughts)
}