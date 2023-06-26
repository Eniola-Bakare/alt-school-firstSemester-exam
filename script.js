const openNav = document.querySelector('.nav-bars')
const headerUl = document.querySelector('.header-ul')
const logInDiv = document.querySelector('.log-in-div')
const mobileNav = document.querySelector('.for-mobile-navs')

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