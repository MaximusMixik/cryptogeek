// npm i gsap
// import "./gsap-animations.js";

// import { gsap, Flip, ScrollTrigger, Observer, Draggable } from "gsap/all.js"; //if use all - all in one import


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";


// document.addEventListener('DOMContentLoaded', (e) => {
// 	gsap.registerPlugin(ScrollTrigger);

// 	// split text
// 	// let split = new SplitText("h1", {
// 	// 	type: "chars"
// 	// })

// 	// gsap.from(split.chars, {
// 	// 	duration: 1,
// 	// 	yPercent: 100,
// 	// 	opacity: 0,
// 	// 	stagger: 0.05
// 	// })

// 	gsap.to('.box', {
// 		rotation: 360,
// 		duration: 2,
// 		scrollTrigger: {
// 			trigger: '.box',
// 			markers: true,
// 			scrub: true,
// 		}
// 	})
// })


// use a script tag or an external JS file


// ! https://www.youtube.com/watch?v=ZCtXfJMdgE0&list=PLMPgoZdlPumexxtvuPUB3TY7LExI1N_Xp&index=2
// document.addEventListener("DOMContentLoaded", (event) => {
// 	// gsap.registerPlugin(ScrollTrigger, Observer)
// 	gsap.registerPlugin(ScrollTrigger);

// 	// gsap code here!

// 	//! lesson 1 (basic)
// 	// gsap.to('.box__square--1',
// 	// 	{
// 	// 		x: 400, // перемещение на указанное растояние по x
// 	// 		y: 200,
// 	// 		duration: 3, // В секундах
// 	// 		// scrollTrigger: '.box__square--1', //тригер по которому будет запускаться анимация (сам елемент)
// 	// 		scrollTrigger: '.box__square--2' //тригер по которому может запускаться анимация (другой елемент)
// 	// 	})
// 	// gsap.to('.box__square--2',
// 	// 	{
// 	// 		x: -400,
// 	// 		y: -200,
// 	// 		duration: 3,
// 	// 		scrollTrigger: '.box__square--1'
// 	// 	})
// 	// gsap.to - до конечного состояния
// 	// gsap.to('елемент', {обьект опций})

// 	//! lesson 2 (start, end, marker, coordinate)
// 	// gsap.to(".box__square--1", {
// 	// 	x: 600,
// 	// 	duration: 3,
// 	// 	scrollTrigger: {
// 	// 		trigger: ".box__square--1",
// 	// 		// start: 500, // позиция срабатывания, - раньше, + позже
// 	// 		// start: "top center", // позиция срабатывания
// 	// 		start: "top 40%", // позиция срабатывания

// 	// 		markers: true, // показ метки срабатывания
// 	// 		// markers: {
// 	// 		// 	startColor: "purple",
// 	// 		// 	endColor: "fuchsia",
// 	// 		// 	fontSize: "2rem",
// 	// 		// 	indent: 200, //отступ от края right to left
// 	// 		// 	// indent: false, //отступ от края left
// 	// 		// }, // стилизация  метки срабатывания
// 	// 		// end: "center 20%", //вместо у, х указываем нужные координаты
// 	// 		end: () => `+=${document.querySelector(".box__square--1").offsetHeight}`,
// 	// 		toggleClass: "red", // добавляется класс при срабатівании
// 	// 	}
// 	// })


// 	//! test
// 	// gsap.to('.box__square--1', {
// 	// 	x: 300,
// 	// 	y: 200,
// 	// 	duration: 10,
// 	// 	scrollTrigger: {
// 	// 		trigger: ".box__square--2",
// 	// 		start: 'top 60%',
// 	// 		end: 'bottom 30%',
// 	// 		markers: true,
// 	// 	},

// 	// })

// 	//! lesson 3 (toggle actions)
// 	// gsap.to(".box__square--1", {
// 	// 	x: 1000,
// 	// 	duration: 8,
// 	// 	// x: 700,
// 	// 	// duration: 3,
// 	// 	scrollTrigger: {
// 	// 		trigger: ".box__square--1",
// 	// 		start: "top 60%",
// 	// 		end: "top 40%",
// 	// 		// toggleActions: "play none none none",  //срабатывает один раз
// 	// 		// toggleActions: "restart reverse none none", //по окончанию возвращается
// 	// 		// toggleActions: "restart pause none none", // на метке  	scroller-end пауза
// 	// 		// toggleActions: "restart pause resume none", // при возвращении назад доходит до конца
// 	// 		// toggleActions: "restart pause resume reset", // при выходе сброс на старт
// 	// 		toggleActions: "restart pause resume complete", // при выходе конечная позиция
// 	// 		// 							onEnter onLeave onENterBack onLeaveBack
// 	// 		// we can use -  play pause  resume restart reset complete none
// 	// 		markers: {
// 	// 			startColor: "purple",
// 	// 			endColor: "fuchsia",
// 	// 			fontSize: "2rem",
// 	// 		},
// 	// 	}
// 	// })

// 	//! lesson 4

// });

//! https://www.youtube.com/watch?v=FkqJ-EnKUxM&list=PLOQDek48BpZFzxKS-2sLAeSBB83x-xILB
//! lesson 1

// метод("селектор", {обьект с данными по анимации})
// gsap.to('.box__square--1', {
// 	x: 100, // смещение по горизонтали
// 	y: 200, // смещение по вкртикали
// 	duration: 3, // продолжительность (в секундах)
// 	delay: .4, // задержка
// 	background: 'red', // цвет фона в конце анимации
// 	repeatDelay: .2, // задержка перед повтором
// 	// repeat: true, // повтор
// 	repeat: 2, // повтор
// 	stagger: .5, // задержка для каждого из выбранных елемментов (если несколько)
// 	ease: "power2.inOut", // type of animation
// 	// paused: true, // default false
// 	onStart: function () { // start event
// 		alert('Start')
// 	},
// 	// onEnd: function () { // End event
// 	// 	alert('End')
// 	// },
// 	onComplete: function () { // end event
// 		alert('Done')
// 	},
// })

//! lesson 2

// const showMyObj = (selector, obj) => {
// 	const el = document.querySelector(selector)
// 	el.innerHTML = JSON.stringify({
// 		subscribers: obj.subscribers,
// 		sponsors: obj.sponsors,
// 		myColor: obj.myColor,
// 		delta: obj.delta,

// 	}, null, ' ')
// };

// const myObj = {
// 	subscribers: 6000,
// 	sponsors: 3,
// 	myColor: 'red',
// 	delta: .5,

// }

// gsap.to(myObj, {
// 	subscribers: 60000,
// 	sponsors: 300,
// 	myColor: 'blue',
// 	delta: 54,
// 	duration: 10,
// 	delay: 1,
// 	onUpdate: function () {
// 		showMyObj('.selector', myObj)
// 	}
// })
//! lesson 3
