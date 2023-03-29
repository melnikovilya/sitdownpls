document.addEventListener('DOMContentLoaded', function() {
  // hero-swiper
  let heroSwiper = new Swiper('.hero__swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // special-swiper
  let specialSwiper = new Swiper('.special__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
      650: {
        slidesPerView: 2,
        spaceBetween: 32,
        slidesPerGroup: 2,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 32,
        slidesPerGroup: 3,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // rating
  const ratingMediaQuery = window.matchMedia('(min-width: 1201px)')
  const ratingBtn = document.getElementById('ratingBtn');
  let ratingTl = gsap.timeline()
  function buttonChange(e) {
    if (e.matches) {
      ratingTl.from(".leave-8", {
        opacity: 0,
        duration: 0.5,
      })
      ratingBtn.addEventListener('click', () => {
        document.querySelectorAll('.leave-8').forEach(function(each) {
          each.classList.add('active')
          ratingTl.restart()
        })
      })
    } else {
      ratingTl.from(".leave-6", {
        opacity: 0,
        duration: 0.5,
      })
      ratingBtn.addEventListener('click', () => {
        document.querySelectorAll('.leave-6').forEach(function(each) {
          each.classList.add('active')
          ratingTl.restart()
        })
      })
    }

  }
  ratingMediaQuery.addListener(buttonChange)
  buttonChange(ratingMediaQuery)

  // useful-swiper
    let usefulSwiper = new Swiper('.useful__swiper', {
      slidesPerView: 1,
      breakpoints: {
        650: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

  // welcome
  const agree = document.getElementById('agree');
  const agreeBtn = document.getElementById('agreeBtn');
  agree.addEventListener('click', () => {
    agreeBtn.classList.toggle('disabled')
    agreeBtn.disabled = false
  })

  // mask
  var selector = document.querySelector("input[type='tel']")
  var im = new Inputmask("+7 (999) 999-99-99");

  im.mask(selector);

  // validate
  const validation = new window.JustValidate('#welcomeForm');
  validation
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Как вас зовут?',
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Поле должно содержать не менее 3 символов',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Поле должно содержать не более 30 символов',
      }
    ])

    .addField('#tel', [
      {
        rule: 'required',
        errorMessage: 'Укажите ваш телефон',
      },
      {
        validator: () => {
          const phone = selector.inputmask.unmaskedvalue()
          return phone.length === 10
        },
        errorMessage: 'Укажите телефон полностью',
      }
    ])

    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Укажите ваш e-mail',
      },
      {
        rule: 'email',
        errorMessage: 'Укажите корректный e-mail',
      }
    ]);

})

