let dataPage = document.body.getAttribute('data-page');
let idCond = 0;

/*************************************************/
/////////////ID cond begin////////////////////////
/*************************************************/
function getIdCond(e) {
	idCond = e.target.getAttribute('data-id');
	localStorage.setItem('condNumber', idCond);
}
/*************************************************/
/////////////ID cond end////////////////////////
/*************************************************/

/*************************************************/
/////////////TOP Slider begin////////////////////////
/*************************************************/
if (dataPage == 'index') {
	const tsPrev = document.getElementById('ts-btn-prev'),
		tsNext = document.getElementById('ts-btn-next'),
		tS = document.getElementById('topSlider'),
		tsSlides = document.querySelectorAll('.slider__wrapper');

	let tsIndex = 0;

	const tsActiveSlide = (n) => {
		for (tsSlide of tsSlides) {
			tsSlide.classList.remove('active');
		}
		tsSlides[n].classList.add('active');
	};

	const prepareCurrentTSSlide = (ind) => {
		tsActiveSlide(tsIndex);
		swBackTS(tsIndex);
	};

	function swBackTS(tsIndex) {
		switch (tsIndex) {
			case 0:
				tS.style.backgroundImage = 'url(../img/slider-back.png)';
				break;
			case 1:
				tS.style.backgroundImage = 'url(../img/slider-back_1.webp)';
				break;
			case 2:
				tS.style.backgroundImage = 'url(../img/slider-back_2.webp)';
				break;

			default:
				break;
		}
	}

	const tsNextSlide = () => {
		if (tsIndex == tsSlides.length - 1) {
			tsIndex = 0;
			prepareCurrentTSSlide(tsIndex);
		} else {
			tsIndex++;
			prepareCurrentTSSlide(tsIndex);
		}
	};

	const tsPrevSlide = () => {
		if (tsIndex == 0) {
			tsIndex = tsSlides.length - 1;
			prepareCurrentTSSlide(tsIndex);
		} else {
			tsIndex--;
			prepareCurrentTSSlide(tsIndex);
		}
	};

	tsNext.addEventListener('click', tsNextSlide);
	tsPrev.addEventListener('click', tsPrevSlide);
}

/*************************************************/
/////////////TOP Slider end////////////////////////
/*************************************************/

/*************************************************/
/////////////JSON parse begin//////////////////////
/*************************************************/
if (dataPage == 'index') {
	const dayProductBrand = document.getElementById('day-product__brand');
	const dayProductArticle = document.getElementById('day-product__article');
	const dayProductCost = document.getElementById('day-product__cost');
	const dayProductPicture = document.getElementById('day-product__picture');
	const generalProducts = document.getElementById('generalProducts');
	const dayProductIndex = 2;
	const generalProductsArray = [20, 50, 60, 100];

	function setTopProduct() {
		dayProductBrand.innerHTML = baseCond[dayProductIndex].Бренд;
		dayProductArticle.innerHTML = baseCond[dayProductIndex].Артикул;
		dayProductCost.innerHTML = baseCond[dayProductIndex].Цена;
		dayProductPicture.style.backgroundImage =
			'url(' + baseCond[dayProductIndex].Изображение.split(',')[0] + ')';
	}

	setTopProduct();

	function createTemplateGP(element) {
		return `
	    <div class="general-product__item">
	    <div class="general-product__wrapper">
	      <div class="general-product__top">
	        <div class="general-product__image" style="background-image: url(${
						baseCond[element].Изображение.split(',')[0]
					});"></div>
	        <div class="general-product__name">
	          <div class="general-product__name-category">
	            Кондиционер
	          </div>
	          <div class="general-product__name-model">
	            <span>${baseCond[element].Бренд} </span><span>${
			baseCond[element].Артикул
		}</span>
	          </div>
	        </div>
	      </div>
	      <div class="general-product__bottom">
	        <div class="general-product__price">${baseCond[element].Цена}</div>
	        <div class="general-product__btn">
	          <a href="conditioner.html" class="general-product__btn-link" data-id="${element}" onclick="getIdCond(event)"
	            >К товару</a
	          >
	        </div>
	      </div>
	    </div>
	  </div>
	`;
	}

	function setGeneralProducts(arrayOfGeneralProducts) {
		arrayOfGeneralProducts.forEach((element) => {
			generalProducts.innerHTML += createTemplateGP(element);
		});
	}

	setGeneralProducts(generalProductsArray, baseCond);
}

/*************************************************/
/////////////JSON parse end////////////////////////
/*************************************************/

/*************************************************/
/////////////General_products begin//////////////////////
/*************************************************/

/*************************************************/
/////////////General_products end////////////////////////
/*************************************************/

/*************************************************/
/////////////main-sales begin//////////////////////
/*************************************************/

/*************************************************/
/////////////main-sales end////////////////////////
/*************************************************/

/*************************************************/
/////////////top-link begin//////////////////////
/*************************************************/
const topLink = document.getElementById('topLink');
const scrollMaxTopLink = 300;

setInterval(function () {
	let scrollTop = window.pageYOffset || document.body.scrollTop;

	console.log(scrollTop);

	if (scrollTop > scrollMaxTopLink) {
		if (!topLink.classList.contains('active')) {
			topLink.classList.add('active');
		}
	} else {
		if (topLink.classList.contains('active')) {
			topLink.classList.remove('active');
		}
	}
}, 700);

/*************************************************/
/////////////top-link end////////////////////////
/*************************************************/

/*************************************************/
/////////////modal-window begin//////////////////////
/*************************************************/
const btnOpen = document.getElementById('returnCallBut');
const modal = document.getElementById('wrapper-modal');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');

function closeModal() {
	modal.classList.remove('active');
	document.body.classList.remove('scroll_Off');
}

btnOpen.addEventListener('click', function () {
	window.scrollTo(0, 0);
	document.body.classList.add('scroll_Off');
	modal.classList.add('active');
});

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);
/*************************************************/
/////////////modal-window end////////////////////////
/*************************************************/

/*************************************************/
/////////////conditioner begin////////////////////////
/*************************************************/
if (dataPage == 'conditioner') {
	const condItemArticle = document.getElementById('condItemArticle');
	const condItemBrand = document.getElementById('condItemBrand');
	const condItemTTH = document.getElementById('condItemTTH');
	const condItemImage = document.getElementById('condItemImage');
	const condItemDocumentation = document.getElementById(
		'condItemDocumentation'
	);
	const condItemPrice = document.getElementById('condItemPrice');
	let TTHCond = '';

	idCond = localStorage.getItem('condNumber');
	console.log(idCond);

	function setCondItem(idCond) {
		condItemArticle.innerHTML = baseCond[idCond].Артикул;
		condItemBrand.innerHTML = baseCond[idCond].Бренд;
		condItemImage.style.backgroundImage =
			'url(' + baseCond[idCond].Изображение.split(',')[0] + ')';
		baseCond[idCond].Характеристики.split(';').forEach((element) => {
			TTHCond += '<p>' + element + '</p>';
		});
		condItemTTH.innerHTML = TTHCond;
		condItemDocumentation.href = baseCond[idCond].Инструкции.split(',')[0];
		condItemPrice.innerHTML = baseCond[idCond].Цена;
	}

	setCondItem(idCond);
}
/*************************************************/
/////////////conditioner end////////////////////////
/*************************************************/

/*************************************************/
/////////////allCond begin////////////////////////
/*************************************************/
if (dataPage == 'allCond') {
	const allCondProducts = document.getElementById('allCondWrapper');
	const filtrCond = document.getElementById('filtr_cond');
	const butFiltr = document.getElementById('butFiltr');
	let allBrands = [];

	function createTemplateAC(element) {
		let imgLink;
		if (element.Изображение) {
			imgLink = element.Изображение.split(',')[0];
		} else {
			imgLink = '';
		}
		return `
	    <div class="general-product__item">
	    <div class="general-product__wrapper">
	      <div class="general-product__top">
	        <div class="general-product__image" style="background-image: url(${imgLink});"></div>
	        <div class="general-product__name">
	          <div class="general-product__name-category">
	            Кондиционер
	          </div>
	          <div class="general-product__name-model">
	            <span>${element.Бренд} </span><span>${element.Артикул}</span>
	          </div>
	        </div>
	      </div>
	      <div class="general-product__bottom">
	        <div class="general-product__price">${element.Цена}</div>
	        <div class="general-product__btn">
	          <a href="conditioner.html" class="general-product__btn-link" data-id="${element.id}" onclick="getIdCond(event)"
	            >К товару</a
	          >
	        </div>
	      </div>
	    </div>
	  </div>
	`;
	}

	function setACProducts(arrayOfGeneralProducts) {
		arrayOfGeneralProducts.forEach((element) => {
			allCondProducts.innerHTML += createTemplateAC(element);
		});
	}

	baseCond.forEach((element) => {
		allBrands.push(element.Бренд);
	});
	let uniBrands = [...new Set(allBrands)];

	uniBrands.forEach((element, index) => {
		let newOption = new Option(element, element);
		filtrCond.append(newOption);
	});

	let selectedOption = filtrCond.options[filtrCond.selectedIndex];
	console.log(selectedOption.value);

	// let allCondProductsArray = baseCond.filter(
	// 	(item) => item.Бренд == selectedOption.value
	// );
	let allCondProductsArray = [];

	function searchBrands() {
		baseCond.forEach((element, index) => {
			if (element.Бренд == selectedOption.value) {
				element.id = index;
				allCondProductsArray.push(element);
			}
		});
	}

	searchBrands();

	setACProducts(allCondProductsArray);

	butFiltr.addEventListener('click', () => {
		selectedOption = filtrCond.options[filtrCond.selectedIndex];
		allCondProductsArray = [];
		searchBrands();
		allCondProducts.innerHTML = '';
		setACProducts(allCondProductsArray);
	});
}
/*************************************************/
/////////////allCond end////////////////////////
/*************************************************/

/*************************************************/
////////////////// form-validation begin ///////////////
/*************************************************/
$.validator.addMethod(
	'regex',
	function (value, element, regexp) {
		let regExsp = new RegExp(regexp);
		return regExsp.test(value);
	},
	'Please check your input'
);

$('#form__return-call').validate({
	rules: {
		name: {
			required: true,
			regex: '[А - Яа-я]{1,32}',
		},
		phone: {
			digits: true,
			required: true,
			minlength: 10,
			maxlength: 11,
			regex: '[0-9]+',
		},
	},
	messages: {
		name: 'Введите имя правильно',
		phone: 'Введите Ваш номер',
	},
});

$('#form__return-link').validate({
	rules: {
		name: {
			required: true,
			regex: '[А - Яа-я]{1,32}',
		},
		mail: {
			required: true,
			regex:
				'^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$',
		},
		phone: {
			digits: true,
			required: true,
			minlength: 10,
			maxlength: 11,
			regex: '[0-9]+',
		},
	},
	messages: {
		name: 'Введите имя правильно',
		mail: 'Введите e-mail правильно',
		phone: 'Введите Ваш номер',
	},
});
/*************************************************/
////////////////// form-validation end ///////////////
/*************************************************/
