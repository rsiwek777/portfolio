const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav__item')
const text = document.querySelector('.tooltiptext')
const footerYear = document.querySelector('.footer__year')

const copyContent = async () => {
	try {
		await navigator.clipboard.writeText(text.innerHTML)
		console.log('Content copied to clipboard!')
	} catch (err) {
		console.error('Failed to copy: ', err)
	}
	text.style.backgroundColor = 'rgba(140, 255, 0, 0.5)'
	text.textContent = 'Copied: kozackikozak#0103'
	setTimeout(() => {
		text.style.backgroundColor = ''
		text.textContent = 'kozackikozak#0103'
	}, 1500)
}

navItems.forEach(e =>
	e.addEventListener('click', () => {
		nav.classList.remove('nav-active')
	})
)

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()

burgerBtn.addEventListener('click', () => {
	nav.classList.toggle('nav-active')
	let delayTime = 0
	navItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '0.' + delayTime + 's'
		delayTime++
	})
})
