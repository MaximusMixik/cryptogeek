// console.log('my custom scripts added')
// // article navigation
// import "./article-navigation.js";

class Accordion {
	constructor(containerSelector = '[data-accordion]') {
		this.accordionContainersList = document.querySelectorAll(containerSelector)

		this.init()
	}

	// removeAllClasses() {
	// 	this.accordionContainersList.forEach(acc => {
	// 		const list = acc.querySelectorAll('[data-accordion-item]')
	// 		for (const item of list) {
	// 			item.classList.remove('accordion-open')
	// 		}
	// 	})
	// }
	openAccordionItem(e) {
		const targetBlock = e.target.closest('[data-accordion-item]')
		// if need accordion (only one open)
		// const isOpen = targetBlock.classList.contains('accordion-open')
		// this.removeAllClasses()
		// if (!isOpen) targetBlock.classList.toggle('accordion-open')

		targetBlock.classList.toggle('accordion-open')
	}
	init() {
		if (!this.accordionContainersList.length) return false
		this.accordionContainersList.forEach(acc => {
			const list = acc.querySelectorAll('[data-accordion-item]')
			for (const item of list) {
				const trigger = item.querySelector('[data-accordion-trigger]')
				trigger.addEventListener('click', (e) => this.openAccordionItem(e))
			}
		})
	}
}


window.onload = () => {
	new Accordion()
}