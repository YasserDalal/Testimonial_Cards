export function darkBg(...elem){
  elem.forEach((elements) => {
    elements.style.filter = 'brightness(20%)'
  })
}

export function normalBg(...elem){
  elem.forEach((elements) => {
    elements.style.filter = 'brightness(100%)'
  })
}

export function spinButton(...elem){
  elem.forEach((elements) => {
    elements.classList.remove("spin");
    void elements.offsetWidth; // Force reflow
    elements.classList.add('spin')
  })
}