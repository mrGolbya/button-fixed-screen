import buttons from './buttons.json' assert { type: 'json' };

document.body.insertAdjacentHTML('beforeend', 
`<div class="social__buttons">
<div class="container">
  <div class="social__wrapper">
    
    <div class="button"
      ><img
        src="images/message.svg"
        class="message"
        alt="message"
        width="36"
        height="36" /><span></span
    ></div>
  </div>
</div>
</div>`);

function createButtons() {
 
  for (let i of buttons){
    let socialWrapper = document.querySelector('.social__wrapper')
    socialWrapper.insertAdjacentHTML('afterbegin', `<a href=${i.href}
    target="_blank"
    rel="nofollow noopener noreferrer"
    class=${i.name}
  >
    <img src=${i.img} alt=${i.name} width="50" height="50"
  /></a>`) 
  
  // console.log(document.querySelector('.social__wrapper a').animate([
  //       // key frames
  //       { transform: 'translateY(0px)' },
  //       { transform: `translateY(-${+i.width+1}rem)` }
  //     ], {
  //       // sync options
  //       duration: 2000,
  //       iterations: Infinity
  //     }))
  }
}
createButtons()


//создать функцию, в которую передаётся параметр translateY и затем добавлять эту анимацию   
//при клике на кнопку для каждого элемента должен быть свой отступ


//animation-active
const VK = document.querySelector('.social__wrapper .vk ')
const WAHATSAPP = document.querySelector('.social__wrapper .wahatsapp')
const MAIL = document.querySelector('.social__wrapper .mail ')
const BTN = document.querySelector('.social__buttons .button')
const MESSAGE = document.querySelector('.social__buttons .button .message')
const BTN_SPAN = document.querySelector('.social__buttons .button span')

document.querySelector('.social__wrapper').addEventListener('click', (e) => {

  if (!e.target.classList.contains('active')) {

    VK.classList.remove('animation-active-1-none')
    WAHATSAPP.classList.remove('animation-active-2-none')
    MAIL.classList.remove('animation-active-3-none')
    BTN.style.setProperty('--animation-pulse', 'none')

    BTN.classList.add('active')
    BTN_SPAN.classList.add('active')
    MESSAGE.classList.add('hidden')
    VK.classList.add('animation-active-1')
    WAHATSAPP.classList.add('animation-active-2')
    MAIL.classList.add('animation-active-3')

  }

  else {
    
    BTN.classList.remove('active')
    BTN_SPAN.classList.remove('active')
    VK.classList.remove('animation-active-1')
    WAHATSAPP.classList.remove('animation-active-2')
    MAIL.classList.remove('animation-active-3')
    MESSAGE.classList.remove('hidden')
    
    BTN.style.setProperty('--animation-pulse', 'pulse 1.8s linear infinite')
    VK.classList.add('animation-active-1-none')
    WAHATSAPP.classList.add('animation-active-2-none')
    MAIL.classList.add('animation-active-3-none')
    
  }
})
