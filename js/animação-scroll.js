document.addEventListener("DOMContentLoaded", function() {

    const elementosEscondidos = document.querySelectorAll('.esconder');

    const observador = new IntersectionObserver(function (elementosVisiveis) {
        elementosVisiveis.forEach(function (item) {

            if(item.isIntersecting) {
                item.target.classList.add('mostrar')
            }
        });
    });
    elementosEscondidos.forEach(function(elemento) {
        observador.observe(elemento);
    });
});