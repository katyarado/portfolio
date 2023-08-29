// Бургер-меню
document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("burger").addEventListener("click", function () {
		document.querySelector(".header").classList.toggle("open")
	})
})

// Back to top
$('.back-to-top').click(function () {
	$('body,html').animate({ scrollTop: 0 }, 100); // 800 - Скорость анимации
});

$(window).scroll(function () { // Отслеживаем начало прокрутки
	let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

	if (scrolled > 350) { // Если высота прокрутки больше 350 - показываем кнопку
		$('.back-to-top').addClass('active');
	} else {
		$('.back-to-top').removeClass('active');
	}
});

// Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
	if (e.key === "Escape") {
		// Действие при клике
		document.querySelector(".header").classList.remove("open")
	}
});

// Закрыть меню при клике вне его
document.getElementById("menu").addEventListener('click', event => {
	event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
	event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
	if (event._isClickWithInMenu) return;
	// Действие при клике
	document.querySelector(".header").classList.remove("open")
});

// ===================================== Бургер-меню


// Popup JS

let btnPopup = document.querySelectorAll(".open-popup");
// let popup = document.querySelector(".popup-bg");

document.querySelectorAll(".open-popup").forEach(btnPopup => {
	btnPopup.addEventListener("click", function() {
		document.getElementById("popup").classList.add("open");
	})
})

document.getElementById("close-popup").addEventListener("click", function() {
	document.getElementById("popup").classList.remove("open");
})

window.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		document.getElementById("popup").classList.remove("open");
	}
})

document.querySelector("#popup #form").addEventListener("click", event => {
	event._isClickWithInPopup = true;
});

document.getElementById("popup").addEventListener("click", event => {
	if (event._isClickWithInPopup) return;
	event.currentTarget.classList.remove("open");
})


// Валидация формы=====================
let validation = new JustValidate("#forma", {
	// validateBeforeSubmitting: true,
    // errorFieldCssClass: "is-invalid",
errorLabelStyle: {
	color: "#9D0A0A"
}
})

let selector = document.querySelector("#phone")
let im = new Inputmask("+7(999)999-99-99")
im.mask(selector)

validation.addField("#name" , [
	{
		rule: "required",
		errorMessage : "введите имя"
	},
	{
		rule: "minLength",
		value: 2,
		errorMessage : "минимум 2 символа"
	}
])

.addField("#e-mail" , [
	{
		rule: "required",
		errorMessage : "введите адрес электронной почты"
	},
	{
		rule: "email",
		errorMessage : "ошибка в адресе"
	}
])

.addField("#phone" , [
	{
		rule: "required",
	validator: (value) => {
		const phone = selector.inputmask.unmaskedvalue();
		return Boolean(Number(phone) && phone.length > 0)
	},
	errorMessage : "введите телефон"
	},
])
// .onSuccess((event) => {
// 	alert("Форма успешно отправлена!");
// })
// Валидация формы=====================



// // Отправка формы ====================
// $(document).ready(function() {

// 	//E-mail Ajax Send
// 	$("form").submit(function(event) { //Change
// 		var th = $(this);
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php", //Change
// 			data: th.serialize()
// 		}).done(function() {
// 			alert("Спасибо. Форма успешно отправлена.");
// 			th.find("input").val("");
// 			setTimeout(function() {
// 				// Done Functions
// 				th.trigger("reset");
// 			}, 1000);
// 		});
// 		return false;
// 	});

// });
// // Отправка формы ====================



// $("form").each(function () {
// 	$(this).validate({
// 	  rules: {
// 		name: {
// 		  required: true,
// 		  minlength: 2
// 		},
// 		phone: "required",
// 		email: {
// 		  required: true,
// 		  email: true
// 		}
// 	  },
// 	  messages: {
// 		name: {
// 		  required: "Пожалуйста, введите своё имя",
// 		  minlength: jQuery.validator.format("Введите минимум {0} символа")
// 		},
// 		phone: "Пожалуйста, введите свой телефон",
// 		email: {
// 		  required: "Пожалуйста, введите свою почту",
// 		  email: "Неправильно введен адрес эл.почты"
// 		}
// 	  },
// 	  submitHandler: function (form) {
// 		$.ajax({
// 		  type: "POST",
// 		  url: $(form).attr('action'),
// 		  data: $(form).serialize()
// 		}).done(function () {
// 		  $(form).find("input").val("");
// 		  $('#order_form').fadeOut();
// 		  $('.overlay, #thanks').fadeIn('slow');
// 		  $(form).trigger('reset');
// 		});
// 		return false;
// 	  }
// 	});
//   });



