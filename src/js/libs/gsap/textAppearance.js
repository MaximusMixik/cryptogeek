import { gsap } from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger.js";
import SplitText from "gsap/SplitText.js";

gsap.registerPlugin(SplitText, ScrollTrigger);

document.fonts.ready.then(() => {
	const splitList = document.querySelectorAll('.split-text')
	splitList.forEach(el => {
		let split = SplitText.create(el, {
			type: "chars",
		})
		gsap.fromTo(split.chars,
			{
				color: 'transparent',
			}, {
			color: '#000',
			stagger: 0.03,
			scrollTrigger: {
				trigger: el,
				start: 'top 70%',
				end: 'bottom 40%',
				scrub: 3,
				markers: true,
				toggleActions: 'restart pause revers pause',
			}
		})

	})
})
