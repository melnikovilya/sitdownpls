document.addEventListener('DOMContentLoaded', function() {
  // goods
  let goodsSwiper = new Swiper('.goods__swiper', {
    slidesPerView: 2,
    grid: {
      rows: 3,
      fill: "row",
    },
    slidesPerGroup: 2,
    spaceBetween: 16,
    breakpoints: {
      650: {
        slidesPerView: 2,
        grid: {
          rows: 3,
          fill: "row",
        },
        slidesPerGroup: 2,
        spaceBetween: 32,
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 3,
          fill: "row",
        },
        spaceBetween: 32,
      },
    },
    pagination: {
      el: ".goods__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

  // noUiSlider
  let rateSlider = document.getElementById('rateSlider');
  const rateInput0 = document.getElementById('rateInput0');
  const rateInput1 = document.getElementById('rateInput1');
  let inputs = [rateInput0, rateInput1];
  noUiSlider.create(rateSlider, {
    start: [2000, 150000],
    connect: true,
    step: 1000,
    range: {
      'min': [0],
      'max': [200000],
    }
  });
  rateSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle])
  });

  const setRateSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    rateSlider.noUiSlider.set(arr)
  }
  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRateSlider(index, e.currentTarget.value);
    })
  })

  const rateSliderConnect = document.querySelector('.noUi-connect')
  rateSlider.noUiSlider.on('start', () => {
    rateSliderConnect.classList.add('update')
  });
  rateSlider.noUiSlider.on('end', () => {
    rateSliderConnect.classList.remove('update')
  });

  const sidebarMediaQuery = window.matchMedia('(max-width: 1200px)')
  let sidebarTl = gsap.timeline()
  function buttonChange(e) {
    if (e.matches) {
      document.querySelectorAll('.block__title').forEach(function(each) {
        each.addEventListener('click', function(event) {
          const path = event.currentTarget.dataset.path
          const block = document.querySelector(`[data-target="${path}"]`)
          block.classList.toggle('active')
          sidebarTl.from(`[data-target="${path}"] .block__list`, {
            y: '-100%',
            duration: 0.5,
          })
        })
      })
    }
  }
  sidebarMediaQuery.addListener(buttonChange)
  buttonChange(sidebarMediaQuery)

})
