let BotonMenu = document.getElementById('BotonMenu')

BotonMenu.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})