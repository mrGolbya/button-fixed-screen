(async function () {
let response = await fetch('./buttons.json')
let buttons = await response.json()

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

(function () {
  let step = [] 

  for(let i=1; i<=buttons.length; i++){
    step.push(i*2+1)
  }
  
console.log(step)

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
}());

// document.querySelectorAll('.social__wrapper a ').forEach((i)=>{
//   i.animate([
//     // key frames
//     { transform: 'translateY(0px)' },
//     { transform: 'translateY(-300px)' }
//   ], {
//     // sync options
//     duration: 2000,
//     iterations: Infinity
//   });
  
// })


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
}());