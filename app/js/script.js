(function () {
    var burger = document.querySelector('.header__menu-btn')
    if(!burger) return
    var menu = document.querySelector('.header__menu-list')
    var body = document.querySelector('body')



    burger.addEventListener('click', function() {
        menu.classList.toggle('show')
        burger.classList.toggle('show')
        body.classList.toggle('stop-scroll')
    })
    overlay.addEventListener('click', function () {
        menu.classList.remove('show')
        burger.classList.remove('show')
        body.classList.remove('stop-scroll')
  })    
}) ()