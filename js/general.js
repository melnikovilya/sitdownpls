document.addEventListener('DOMContentLoaded', function() {
    // glob
    document.querySelectorAll('.primary-btn').forEach(function(each) {
      each.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path
        document.querySelector(`[data-path="${path}"]`).classList.add('disabled')
      })
    })
    document.querySelectorAll('.custom-input').forEach(function(each) {
      each.addEventListener('input', function(event) {
        const path = event.currentTarget.dataset.path
        const input = document.querySelector(`[data-path="${path}"]`)
        if (input.value != '' ) {
          input.classList.add('active')
        } else {
          input.classList.remove('active')
        }
      })
    })

    // select
    const elementRegion = document.getElementById('headerRegion');
    const choicesRegion = new Choices(elementRegion, {
      searchEnabled: false
    })
    // category
    const elementCategory = document.getElementById('headerCategory');
    const choicesCategory = new Choices(elementCategory, {
      searchEnabled: false
    })
    // burger
    const menu = document.getElementById('headerMenu');
    const burgerOpen = document.getElementById('burgerOpen');
    const burgerClose = document.getElementById('burgerClose');
    let tl = gsap.timeline()
    const mediaQuery = window.matchMedia('(max-width: 900px)')
    function handleTabletChange(e) {
      if (e.matches) {
        tl.from(".nav", {
          opacity:0,
          duration:0.5,
        })
        tl.from(".nav__item", {
          opacity:0,
          stagger:0.1,
          duration:0.7,
        },"-=0.5")
        tl.from(".elephant", {
          opacity:0,
          x:300,
          duration:0.7,
        },"-=1.1")
      }
      burgerOpen.addEventListener('click', () => {
        menu.classList.add('open')
        tl.restart()
      })
      burgerClose.addEventListener('click', () => {
        tl.reverse();
        setTimeout(() => {
          menu.classList.remove('open')
        },1000)
      })
    }
    mediaQuery.addListener(handleTabletChange)
    handleTabletChange(mediaQuery)

})
