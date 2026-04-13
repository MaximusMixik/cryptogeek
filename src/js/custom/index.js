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

function glitch() {
	const glitchList = document.querySelectorAll('[data-glitch]')

	if (!glitchList.length) return

	glitchList.forEach(el => {
		el.classList.add('glitch-active')
	});

	setTimeout(() => {
		glitchList.forEach(el => {
			el.classList.remove('glitch-active')
		});
	}, 1500)
}

class MagneticItem {
	constructor() {
		this.isMobile = window.innerWidth < 768
		this.magneticBlock = this.isMobile
			? document.querySelector('[data-magnetic] .button-cta')
			: document.querySelector('[data-magnetic]')
		this.startShowBlock = document.querySelector('.about')

		this.isFixed = false
		this._clone = null

		this.init()
	}

	// Нижний край .about относительно документа — точка ПОКАЗА
	_getShowThreshold() {
		return this.startShowBlock.getBoundingClientRect().top
	}

	// Верхний край клона относительно документа минус отступ — точка СКРЫТИЯ
	_getHideThreshold() {
		const target = this._clone ?? this.magneticBlock
		return target.getBoundingClientRect().top + window.scrollY - window.innerHeight * 1.3
	}

	_createClone() {
		this._clone = this.magneticBlock.cloneNode(true)
		this._clone.style.cssText = 'visibility: hidden; pointer-events: none;'
		this.magneticBlock.after(this._clone)
	}

	_removeClone() {
		if (this._clone) {
			this._clone.remove()
			this._clone = null
		}
	}
	_enableFixed() {
		if (this.isFixed) return
		this.isFixed = true

		const width = this.magneticBlock.getBoundingClientRect().width
		this._createClone()

		// На мобайлі ховаємо батьківський блок крім кнопки
		if (this.isMobile) {
			this._parentBlock = this.magneticBlock.closest('[data-magnetic]')
			this._parentBlock.style.cssText = 'visibility: hidden; pointer-events: none;'
		}

		Object.assign(this.magneticBlock.style, {
			position: 'fixed',
			bottom: '-120px',
			left: '50%',
			transform: 'translateX(-50%)',
			width: this.isMobile ? 'calc(100% - 32px)' : `${width}px`,
			maxWidth: this.isMobile ? 'calc(100% - 32px)' : '1200px',
			zIndex: '1000',
			margin: '0',
			transition: 'bottom 0.5s cubic-bezier(0.34, 1.26, 0.64, 1)',
			visibility: 'visible',  // перебиваємо inherited hidden від батька
		})

		void this.magneticBlock.offsetHeight
		this.magneticBlock.style.bottom = '24px'
	}

	_disableFixed() {
		if (!this.isFixed) return
		this.isFixed = false

		// Повертаємо батьківський блок
		if (this.isMobile && this._parentBlock) {
			this._parentBlock.removeAttribute('style')
			this._parentBlock = null
		}

		this.magneticBlock.style.opacity = '0'
		this.magneticBlock.style.transition = 'bottom 0.3s ease-in, opacity 0.3s ease-in'
		this.magneticBlock.style.bottom = '-120px'

		setTimeout(() => {
			this.magneticBlock.style.opacity = '1'
			this.magneticBlock.addEventListener('transitionend', () => {
				this._removeClone()
				this.magneticBlock.removeAttribute('style')
			}, { once: true })
		}, 300)
	}
	// _enableFixed() {
	// 	if (this.isFixed) return
	// 	this.isFixed = true

	// 	const width = this.magneticBlock.getBoundingClientRect().width
	// 	this._createClone()

	// 	Object.assign(this.magneticBlock.style, {
	// 		position: 'fixed',
	// 		bottom: '-120px',
	// 		left: '50%',
	// 		transform: 'translateX(-50%)',
	// 		width: this.isMobile ? 'calc(100% - 32px)' : `${width}px`,
	// 		maxWidth: this.isMobile ? 'calc(100% - 32px)' : '1200px',
	// 		zIndex: '1000',
	// 		margin: '0',
	// 		transition: 'bottom 0.5s cubic-bezier(0.34, 1.26, 0.64, 1)',
	// 	})

	// 	void this.magneticBlock.offsetHeight
	// 	this.magneticBlock.style.bottom = '24px'
	// }

	// _disableFixed() {
	// 	if (!this.isFixed) return
	// 	this.isFixed = false

	// 	this.magneticBlock.style.opacity = '0'
	// 	this.magneticBlock.style.transition = 'bottom 0.3s ease-in, opacity 0.3s ease-in'
	// 	this.magneticBlock.style.bottom = '-120px'

	// 	setTimeout(() => {
	// 		this.magneticBlock.style.opacity = '1'
	// 		this.magneticBlock.addEventListener('transitionend', () => {
	// 			this._removeClone()
	// 			this.magneticBlock.removeAttribute('style')
	// 		}, { once: true })
	// 	}, 300)
	// }

	_onScroll() {
		const scrollY = window.scrollY
		const showThreshold = this._getShowThreshold()  // нижний край .about
		const hideThreshold = this._getHideThreshold()  // верх клона - 50vh

		if (scrollY >= showThreshold && scrollY < hideThreshold) {
			this._enableFixed()
		} else {
			this._disableFixed()
		}
	}

	init() {
		if (!this.magneticBlock || !this.startShowBlock) return
		window.addEventListener('scroll', () => this._onScroll(), { passive: true })
		this._onScroll()
	}
}

window.onload = () => {
	new Accordion()
	new MagneticItem()
	glitch()
}