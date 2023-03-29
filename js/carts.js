document.addEventListener('DOMContentLoaded', function() {
    // similar-swiper
    let similarSwiper = new Swiper('.similar', {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 16,
      breakpoints: {
        650: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 32,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 32,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 32,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

  // mask
  var selector = document.querySelector("input[type='tel']")
  var im = new Inputmask("+7 (999) 999-99-99");

  im.mask(selector);

  // welcome
  const agree = document.getElementById('agree');
  const agreeBtn = document.getElementById('agreeBtn');
  agree.addEventListener('click', () => {
    agreeBtn.classList.toggle('disabled')
    agreeBtn.disabled = false
  })

  // validate
  const validation = new window.JustValidate('#modalForm');
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

  // modal-form
  const oneclickOpenBtn = document.getElementById('oneclickOpenBtn');
  const exitBtn = document.querySelectorAll('.exit-btn');
  const modal = document.querySelector('.modal');
  const modalOneclick = document.querySelector('.modal__oneclick');
  const modalWindow = document.querySelectorAll('.modal__window');
  const form = document.querySelector('.oneclick__form');
  const elephant = document.querySelector('.oneclick__elephant');

  let modalTL = gsap.timeline()
  modalTL.from(".modal__overlay", {
    opacity:0,
    duration:0.4,
  })

  oneclickOpenBtn.addEventListener('click', () => {
    modal.classList.add('open')
    modalOneclick.classList.add('active')
    modalTL.restart()
  })

  agreeBtn.addEventListener('click', () => {
    agreeBtn.classList.remove('disabled')
    validation.onSuccess(() => {
      form.classList.add('noactive')
      elephant.classList.remove('noactive')
    })
  })

  exitBtn.forEach((e) => {
    e.addEventListener('click', () => {
      document.querySelector('.cost__btn').classList.remove('disabled')
      modalTL.reverse()
      setTimeout(() => {
        elephant.classList.add('noactive')
        form.classList.remove('noactive')
        modalWindow.forEach((e) => {
          e.classList.remove('active')
        })
        modal.classList.remove('open')
      }, 400)
    })
  })

  // modal-swiper
  const forGallery = document.querySelectorAll('.for-gallery')
  const modalGallery = document.querySelector('.modal__gallery')

  forGallery.forEach((e) => {
    e.addEventListener('click', () => {
      modal.classList.add('open')
      modalGallery.classList.add('active')
      modalTL.restart()
    })
  })

  let smallswiper = new Swiper(".gallery__smallSwiper", {
    spaceBetween: 63,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
      breakpoints: {
    650: {
      slidesPerView: 2,
      spaceBetween: 78,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 78,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 78,
    },

  }
  });
  let bigswiper = new Swiper(".gallery__bigSwiper", {
    spaceBetween: 10,
    thumbs: {
      swiper: smallswiper,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

})
