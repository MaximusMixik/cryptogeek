// export default
class ArticleNavigation {
	constructor() {
		this.navigationLinksList = Array.from(document.querySelectorAll('.sidebar-article__link'));

		if (!this.navigationLinksList.length) return

		this.navigationLinksList[0].classList.add('active') //first link active 

		// собираем все секции по href якорям
		this.navigationSectionsList = this.navigationLinksList
			.map(link => {
				const id = link.getAttribute('href')?.slice(1); // убираем #
				return document.getElementById(id);
			})
			.filter(Boolean); // убираем null, если id не найден

		if (this.navigationLinksList.length && this.navigationSectionsList.length) {
			this.initObserver();
		}
	}

	initObserver() {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						this.setActiveLink(entry.target.id);
					}
				});
			},
			{
				root: null,
				rootMargin: "0px 0px -70% 0px", // смещение, чтобы активировалось немного раньше
				threshold: 0
			}
		);

		this.navigationSectionsList.forEach(section => observer.observe(section));
	}

	setActiveLink(id) {
		this.navigationLinksList.forEach(link => {
			link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
		});
	}
}

// initialize
window.onload = () => {
	const article = document.querySelectorAll('.article__container')
	if (article) {
		new ArticleNavigation
	}
}
