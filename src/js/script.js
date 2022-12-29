const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav__item')

burgerBtn.addEventListener('click', () => {
	nav.classList.toggle('nav-active')
	let delayTime = 0
	navItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '0.' + delayTime + 's'
		delayTime++
	})
})
