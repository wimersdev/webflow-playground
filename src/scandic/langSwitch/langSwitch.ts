//Website lang switch

function langSwitch() {

  //Get current page language
  const pageLang = document.documentElement.lang

  //Get Lang buttons
  const langButtons = document.querySelectorAll('[switch-desk]');
  const langTitle = document.getElementById('lang-title')
  const langButtonsMob = document.querySelectorAll('[switch-mob]');
  const langTitleMob = document.getElementById('lang-title-mob')

  if (pageLang === "en") {
    langTitle.innerHTML = 'ENGLISH'
    langButtons[0].classList.add('cur')
    langButtons[1].classList.add('act')

    langTitleMob.innerHTML = 'ENGLISH'
    langButtonsMob[0].classList.add('cur')
    langButtonsMob[1].classList.add('act')
  } else if (pageLang === 'no') {
    langTitle.innerHTML = 'NORWEGIAN'
    langButtons[0].classList.add('act')
    langButtons[1].classList.add('cur')

    langTitleMob.innerHTML = 'NORWEGIAN'
    langButtonsMob[0].classList.add('act')
    langButtonsMob[1].classList.add('cur')
  }

}

export default langSwitch









