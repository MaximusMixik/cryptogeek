// gsap test
import { gsap } from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger.js";
import SplitText from "gsap/SplitText.js";

gsap.registerPlugin(SplitText, ScrollTrigger);

// split text functionality from video https://www.youtube.com/watch?v=L1afzNAhI40

document.fonts.ready.then(() => { //use this callback for start only after download all fonts

	const splitList = document.querySelectorAll('.split-text')
	splitList.forEach(el => {

		gsap.set(el, { opacity: 1 }) //default state

		let split = SplitText.create(el, {
			type: "chars, words, lines", // chars, words, lines(default)
			// wordsClass: 'word', //add custom classes (word, char, line added in scss)
			// linesClass: 'line',
			// charsClass: 'char',
			// wordsClass: 'word++', //add custom classes with dynamical numbers
			// propIndex: true, // in markup added in style  (example, --word: 3);
			// smartWrap: true, // break words, if use only chars animation (type: "chars", ), 
			// autoSplit: true, // resizeObserver, reload animation when change screen width
			// mask: "lines", //clip lines
			aria: 'hidden', // "hidden" , if it is decorative animation use "none" and in html use role="img" aria-label="description of the animation"
			// ignore: 'sup', // ignore some tags

			//!ex3 after upload 
			onSplit: (self) => { //use "self", no element
				console.log('splitting')
				//  return gsap.from(self.chars,{} }) //use if no need reload animation
				gsap.from(self.chars, //split.chars / split.words / split.lines
					{
						// y: 100, // all elements from y -100px
						yPercent: "random([-100,100])", // random position in even element -100-100px
						rotation: "random([-60,60])", // random rotation in even element -60-60deg
						autoAlpha: 0, //from 0 opacity
						// repeat: -1, //repeat count,  -1 infinity repeat
						// yoyo: true, // false (default), true - add forward animation
						stagger: {
							amount: 0.5, //time between steps
							from: 'random', // 'end', 'start'(default) , 'center', 'random'

							//! cool infinity jump effect
							// repeat: -1,
							// yoyo: true,
						},

					})
			},

			onComplete: () => { //use for better usability, after animation end
				split.revert()
			}
		})

		//!?
		// el.split({ type: 'words' })
		// el.revert()


		//// !ex1 simple (with ScrollTrigger)
		// gsap.from(split.chars, {
		// 	opacity: 0,
		// 	y: 100, // all elements from y -100px
		// 	stagger: 0.05,
		// 	// use trigger for other sections
		// 	scrollTrigger: {
		// 		trigger: el,
		// 		start: 'top 80%',
		// 	}
		// })

	})
})




//for site tenet
// const splitList = document.querySelectorAll('.split-text')
// splitList.forEach(el => {
// 	let split = SplitText.create(el, {
// 		type: "chars, words, lines", // chars, words, lines(default)
// 		wordsClass: 'word', //add custom classes (word, char, line added in scss)
// 		wordsClass: 'word++', //add custom classes with dynamical numbers
// 		propIndex: true, // in markup added in style  (example, --word: 3);
// 	})
// 	// tanet text animation
// 	gsap.to(split.chars,
// 		{
// 			// autoAlpha: 0, //from 0 opacity
// 			color: '#000',
// 			stagger: 0.03,
// 			scrollTrigger: {
// 				trigger: el,
// 				start: 'top 80%',
// 				end: 'top 30%',
// 				scrub: 0.5,
// 				markers: false,
// 				toggleActions: 'play none none none',
// 				// play — при входе в зону,
// 				// none — при выходе,
// 				// none — при обратном входе,
// 				// none — при обратном выходе.
// 			}
// 		})
// })



// other info
/*
in default adding  aria - label and aria - hidden="true", example
<h2 h2 class="section__title split-text" aria-label="Some content" >
	<div aria-hidden="true">
		Some content
	</div>
</h2 >
*/


// TODO watch
/*
mach media (media queries)
let mm = gsap.matchMedia()
mm.add("(prefers-reduced-motion:no-preference", (context) => {

})
	*/



// test
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger.js";
// gsap.registerPlugin( ScrollTrigger);

//!ex1
// document.addEventListener("DOMContentLoaded", () => {
// 	gsap.to(".green-box", {
// 		rotation: 180,
// 		x: 200,
// 		duration: 2,
// 		delay: 0.5,
// 		yoyo: true, // false (default), true - add forward animation
// 		repeat: -1, //repeat count,  -1 infinity repeat
// 		ScrollTrigger: {
// 			trigger: ".green-box",
// 			markers: true,
// 			scrub: true,
// 			start: " top 80%"
// 		}
// 	});
// })



// Easy cleanup with gsap.context()
// https://www.youtube.com/watch?v=DwU72sp_gGI&list=PLLLrVKlAVicI6WGNjM1eh4iF_gJPhnOUu&index=9

// .revert() //remove style to pre-animate state
// .kill() //delete animation after action, style stop in this time
// progress(0).kill() //return animation to start and kill


// gsap.context(() => {}) //if need we can group animations
let ctx = gsap.context(() => {

	let an1 = gsap.to('.one', {
		rotation: 360, duration: 2, repeat: -1, yoyo: true,
	})
	let an2 = gsap.to('.two', {
		yPercent: -100, repeat: -1, yoyo: true,
	})
	let tl1 = gsap.timeline({ repeat: -1, yoyo: true })
	tl1.to('.three', {
		yPercent: 100,
	}).to('.four', {
		duration: 2, rotation: -360,
	})
})

// add to global context
ctx.add("five", () => {
	gsap.to('.five', {
		yPercent: -200, ease: 'none', rotation: 360, duration: 1, repeat: -1, yoyo: true,
	})
})

document.querySelector('.trigger').addEventListener('click', () => {
	ctx.revert()
})

// start from global context
document.querySelector('.start-last').addEventListener('click', () => {
	ctx.five()
})




// Understanding Keyframes
// https://www.youtube.com/watch?v=N2FMU-uqCow&list=PLLLrVKlAVicI6WGNjM1eh4iF_gJPhnOUu&index=2 2:05

gsap.to('.keyframe', {
	// 1.object keyframes
	// keyframes: [
	// 	{ x: 100, ease: 'power2.out', },
	// 	{ y: 100, delay: 0.3, ease: 'power2.out', },
	// 	{
	// 		x: 0, ease: 'power2.inOut', onComplete: () => {
	// 			console.log('end step 3')
	// 		}
	// 	},
	// 	{ y: 0, ease: 'power2.in', },
	// ],
	// ease: 'power2.out',
	// rotate: 360,
	// transformOrigin: 'top left', //'center center'(default)
	repeat: -1,
	yoyo: true,

	//2  percentage  keyframes
	keyframes: {
		"25%": { x: 100, y: 0, rotate: 0 },
		ease: 'power3.in',
		"50%": { y: 100, x: 100, rotate: 90, },
		"75%": { x: 0, y: 100, rotate: 180 },
		"100%": { y: 0, x: 0, rotate: 270 },
		easeEach: 'none',
		ease: 'power3.out',
	},

	duration: 4, //animation duration time
	// rotate: 360, // use if need animation in end
	// ease: 'power2.inOut',
	// ease: 'elastic.in', //animation type

	// 3 array keyframes
	// keyframes: {
	// 	x: [0, 100, 100, 0, 0],
	// 	y: [0, 0, 100, 100, 0],
	// 	rotate: [0, 90, 180, 270, 360],
	// 	easeEach: 'power2.out',
	// }
	// !not use ease: not work
})

// scrolltrigger
// https://www.youtube.com/watch?v=X7IBa7vZjmo&list=PLLLrVKlAVicI6WGNjM1eh4iF_gJPhnOUu&index=3
//! timeline 10:55 min


const elements = document.querySelectorAll('.green-box')

elements.forEach(el => {
	gsap.to(el, {
		// changes with element
		rotate: 360,
		x: 300,
		duration: 3,  //no need if use scrub
		// position, start, end...
		// scrollTrigger: {
		// 	trigger: el, //trigger element
		// 	markers: true,

		// 	toggleActions: 'restart pause revers pause',
		// 	//1. enter the viewport
		// 	//2. out of viewport
		// 	//3. back to top
		// 	//4. to start position

		// 	// play / pause / resume / reverse / restart / reset / complete / none

		// 	// toggleActions: 'restart pause resume none' 
		// 	// start / pause / animation end 

		// 	// coordinates
		// 	start: 'top center', //default 'top bottom'
		// 	end: 'bottom center', //default'bottom top'
		// 	//can use px or %, 
		// 	// 1. trigger element watch
		// 	// 2. viewport watch

		// 	// end: '+=20', // +=0 (element start) +=100 (plus to element start position)
		// 	// end: () => '+=' + document.querySelector('.test-size').offsetWidth, //can take needed object size

		// 	// endTrigger: '.test-size',
		// 	// end: 'top center', //end from end trigger element
		// },

		scrollTrigger: {
			trigger: el,
			start: 'top center',
			end: 'top 100px',
			markers: true,

			// scrub: true, //жесткая привязка к прогресу прокрутки (плавности 0)
			scrub: 2, //замедление анимации при прокрутке по соотношению к прогресу ( плавность перехода?)

			// 
			// pin: true,
			// pinSpacing: false, //remove empty(white gap) space
		},
		ease: 'none' //no need if use scrub
	})
})
