//jquery transicion

$('.navbar a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
});

//escritura
const typed = new Typed(".typed", {
    strings: [
            '<i class="presentacion">Bienvenido a mi portafolio</i>',
            '<i class="presentacion">Soy Edward Mayk</i>',
            '<i class="presentacion">Backend Developer</i>', 
            '<i class="presentacion">Frontend Developer</i>'
        ],
        typeSpeed: 100, // Velocidad en mlisegundos para poner una letra,
        startDelay: 700, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        backSpeed: 100, // Velocidad en milisegundos para borrrar una letra,
        smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
        shuffle: false, // Alterar el orden en el que escribe las palabras.
        backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
        showCursor: true, // Mostrar cursor palpitanto
        cursorChar: '|', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato
});


//Google maps


function initMap(){
    var coord = {lat:-12.030600437216256 ,lng: -75.23510745448297};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 18,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}


// modo oscuro
const btnSwitch = document.querySelector("#switch")

btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    // guardar el modo
    
})



//ajax
//$(document).ready(function(){
//    $('#btnguardar').click(function(){
//        var datos=$('#frmajax').serialize();
//        $.ajax({
//            typed:"POST",
//            url:"form.php",
//            data: datos,
//            success:function(r){
//                if(r==1){
//                    alert("agregado con exito");
//                }else{
//                    alert("Fallo el server");
//                }
//            }
//        });
//        return false;
//
//
//    });
//});