// Wow JS

if(document.querySelector('.wow'))
	new WOW().init();

// Wow JS




// BANNER SLIDER
	
let countSlide = 1;
let countSlideNow = 0;

document.querySelectorAll('.banner__slider .slider__item').forEach((item, itemNum) => {
	document.querySelector('.slider__dots').innerHTML += '<button class="dot"></button>'

	if( itemNum == 0 ){
		item.classList.add('slider__item_active')
	}

	countSlideNow = itemNum

})

document.querySelectorAll('.slider__dots .dot').forEach((dot, dotNum) => {
	if( dotNum == 0 ){
		dot.classList.add('dot_active')
	}

	if( dotNum < 1 ){
		dot.closest('.slider__dots').classList.add('slider__dots_hide')
	}else{
		dot.closest('.slider__dots').classList.remove('slider__dots_hide')
	}

	dot.onclick = function (e) {
		this.closest('.slider__dots').querySelectorAll('.dot').forEach((dot1) => {
			dot1.classList.remove('dot_active')
		})
		document.querySelectorAll('.banner__slider .slider__item').forEach((item, itemNum) => {
			item.classList.remove('slider__item_active')
		})
		document.querySelectorAll('.banner__slider .slider__item')[dotNum].classList.add('slider__item_active')

		dot.classList.add('dot_active')

		countSlide = dotNum
		inter;
	}
})

let inter = setInterval(function () {

	document.querySelectorAll('.slider__dots .dot').forEach((dot) => {
		dot.classList.remove('dot_active')
	})
	document.querySelectorAll('.banner__slider .slider__item').forEach((item) => {
		item.classList.remove('slider__item_active')
	})
	document.querySelectorAll('.banner__slider .slider__item')[countSlide].classList.add('slider__item_active')
	document.querySelectorAll('.slider__dots .dot')[countSlide].classList.add('dot_active')

	countSlide++;

	if( countSlide > countSlideNow ){
		countSlide = 0
	}

	
}, 2000)


// BANNER SLIDER







// ol count

document.querySelectorAll('.opportunities__ol li').forEach((li, liNum) => {
	if( liNum >= 9 ){
		li.classList.add('li_moreTen')
	}
})

// ol count




// button to block

var linkNav = document.querySelectorAll('a[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 1;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r-50);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}

// button to block






// Parallax effect

window.addEventListener('mousemove', function (e) {

	let moveOutCenterX = e.clientX - (window.innerWidth / 2)
	let moveOutCenterY = e.clientY - (window.innerHeight / 2)


	document.querySelectorAll('.parallaxBlock .image-item').forEach((item) => {

		let speed = item.getAttribute('data-speed')
		let direction = item.getAttribute('data-direction')

		if( speed == 0 ){

			item.querySelector('img').style.top = 0
			item.querySelector('img').style.left = 0

		}else{

			item.querySelector('img').style.left = direction * moveOutCenterX / (120 - speed) + 'px';
			item.querySelector('img').style.top = direction * moveOutCenterY / (120 - speed) + 'px';

		}

	})
})

// Parallax effect




// popup button

if( document.querySelector('.popup') ){

	document.querySelectorAll('button, a').forEach((button) => {
		button.onclick = function (e) {

			if( this.getAttribute('data-popup') ){
				
				let popupClass = this.getAttribute('data-popup')

				document.querySelector('.popup-'+popupClass).classList.add('popup_active')


			}else{

			}

		}

		document.querySelector('.popup__bgd').onclick = function () {
				
			document.querySelector('.popup').classList.remove('popup_active')

		}
		document.querySelector('.popup__close').onclick = function () {
				
			document.querySelector('.popup').classList.remove('popup_active')

		}
	})

}



// popup button





























