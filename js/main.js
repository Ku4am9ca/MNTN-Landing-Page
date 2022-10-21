const navBtn = document.querySelector(".nav-button");
const mobileNav = document.querySelector('.mabile-nav');
const body = document.body;
//клик по кнопки
navBtn.addEventListener("click", function (event) {
	event.stopPropagation();
	mobileNav.classList.toggle('mabile-nav-active');
	navBtn.classList.toggle("nav-button-close");
	body.classList.toggle("no-scrolle");
})



//Клик по окну за пределами навигации
window.addEventListener("click", function () {
	console.log("Click on Window");


	if (body.classList.contains("no-scrolle")) {
		body.classList.toggle("no-scrolle");
		navBtn.classList.toggle("nav-button-close");
		mobileNav.classList.toggle('mabile-nav-active');
	}
})
//останавливаем клик внутри открытой мобильной навигациии
mobileNav.addEventListener("click", function (event) {
	event.stopPropagation();
})
/*51 минута*/