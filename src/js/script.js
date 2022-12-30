const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav__item')
const text = document.querySelector('.tooltiptext')

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

burgerBtn.addEventListener('click', () => {
	nav.classList.toggle('nav-active')
	let delayTime = 0
	navItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '0.' + delayTime + 's'
		delayTime++
	})
})
