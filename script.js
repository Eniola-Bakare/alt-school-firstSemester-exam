const openNav = document.querySelector('.nav-bars')
const headerUl = document.querySelector('.header-ul')
const logInDiv = document.querySelector('.log-in-div')
const mobileNav = document.querySelector('.for-mobile-navs')
const faqContainer = document.querySelector('.desktop-five-second')
const faqAnswer = document.querySelectorAll('.faq-answer')

openNav.addEventListener('click', function(){
  mobileNav.style.display = 'flex'
  mobileNav.classList.add('nav-mobile-visible')
  openNav.style.display = 'none'

  const navClose = document.querySelector('.nav-times')
  navClose.addEventListener('click', function(){
    mobileNav.style.display = 'none'
    mobileNav.classList.remove('nav-mobile-visible')
    openNav.style.display = 'flex'
  })
})

faqAnswer.forEach(eachAns => eachAns.style.display ='none')

faqContainer.addEventListener('click', function(e){
  let target = e.target
  let parentEl = target.closest('.faq-div')

  // using event propagation to check work the accordion
  if(e.target.classList.contains('question-img')){
    document.querySelectorAll('.question-img').forEach(eachImg => {
      eachImg.src = './assets/plus.svg'
    })
    document.querySelectorAll('.question-img').forEach(eachImg => {
      eachImg.alt = 'plus icon'
    })
    
    e.target.src = './assets/minus.svg'
    e.target.alt = 'minus icon'

    // to expand the faq answer
    let faqAnswerParticular = parentEl.querySelector('.faq-answer')
    faqAnswer.forEach(eachAns => eachAns.style.display ='none')
    faqAnswerParticular.style.display ='flex'
  }
})

