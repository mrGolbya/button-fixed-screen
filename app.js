let response = await fetch('./buttons.json')
let buttons = await response.json()
console.log(buttons)

//animation-active
document.querySelector('.social__wrapper').addEventListener('click', (e) => {

  if (!e.target.classList.contains('active')) {

    document.querySelector('.social__wrapper .vk ').classList.remove('animation-active-1-none')
    document.querySelector('.social__wrapper .wahatsapp').classList.remove('animation-active-2-none')
    document.querySelector('.social__wrapper .mail ').classList.remove('animation-active-3-none')
    document.querySelector('.social__buttons .button').style.setProperty('--animation-pulse', 'none')

    document.querySelector('.social__buttons .button').classList.add('active')
    document.querySelector('.social__buttons .button span').classList.add('active')
    document.querySelector('.social__buttons .button .message').classList.add('hidden')
    document.querySelector('.social__wrapper .vk ').classList.add('animation-active-1')
    document.querySelector('.social__wrapper .wahatsapp').classList.add('animation-active-2')
    document.querySelector('.social__wrapper .mail ').classList.add('animation-active-3')
  }


  else {
    document.querySelector('.social__buttons .button').classList.remove('active')
    document.querySelector('.social__buttons .button span').classList.remove('active')
    document.querySelector('.social__wrapper .vk ').classList.remove('animation-active-1')
    document.querySelector('.social__wrapper .wahatsapp').classList.remove('animation-active-2')
    document.querySelector('.social__wrapper .mail ').classList.remove('animation-active-3')
    document.querySelector('.social__buttons .button .message').classList.remove('hidden')
    
    document.querySelector('.social__buttons .button').style.setProperty('--animation-pulse', 'pulse 1.8s linear infinite')
    document.querySelector('.social__wrapper .vk ').classList.add('animation-active-1-none')
    document.querySelector('.social__wrapper .wahatsapp').classList.add('animation-active-2-none')
    document.querySelector('.social__wrapper .mail ').classList.add('animation-active-3-none')
  }
})