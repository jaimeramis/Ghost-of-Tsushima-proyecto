//VARIABLES PARA EFECTO MOVIMIENTO MEDIA
var caja01 = document.querySelector('#caja01');
var caja02 = document.querySelector('#caja02');
var caja03 = document.querySelector('#caja03');
var caja04 = document.querySelector('#caja04');

//VARIABLES PARA CAMBIO DE VIDEO MEDIA
var video01 = document.querySelector('#video01');
var video02 = document.querySelector('#video02');
var video03 = document.querySelector('#video03');
var video04 = document.querySelector('#video04');

//NORMALIZADOR MEDIA
video02.classList.add("dp");
video03.classList.add("dp");
video04.classList.add("dp");

//EVENTOS MEDIA
caja01.addEventListener('mouseenter', function() {
    caja02.classList.remove("active");
    caja03.classList.remove("active");
    caja04.classList.remove("active");
    caja01.classList.add("active");

    video01.classList.remove("dp");
    video02.classList.add("dp");
    video03.classList.add("dp");
    video04.classList.add("dp");
});

caja02.addEventListener('mouseenter', function() {
    caja01.classList.remove("active");
    caja03.classList.remove("active");
    caja04.classList.remove("active");
    caja02.classList.add("active");

    video01.classList.add("dp");
    video02.classList.remove("dp");
    video03.classList.add("dp");
    video04.classList.add("dp");
});

caja03.addEventListener('mouseenter', function() {
    caja01.classList.remove("active");
    caja02.classList.remove("active");
    caja04.classList.remove("active");
    caja03.classList.add("active");

    video01.classList.add("dp");
    video02.classList.add("dp");
    video03.classList.remove("dp");
    video04.classList.add("dp");
});

caja04.addEventListener('mouseenter', function() {
    caja01.classList.remove("active");
    caja02.classList.remove("active");
    caja03.classList.remove("active");
    caja04.classList.add("active");

    video01.classList.add("dp");
    video02.classList.add("dp");
    video03.classList.add("dp");
    video04.classList.remove("dp");
});

    


