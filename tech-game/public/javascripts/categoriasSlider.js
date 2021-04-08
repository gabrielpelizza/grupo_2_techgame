console.log('vinculado')
window.addEventListener('load',function(){
    // new Glider(document.querySelector('.carousel__lista')); //nueva instancia de la libreria, le indica a la libreria que todo el contenido dentro del elemento forman parte del carrusel
     new Glider(document.querySelector('.carousel__lista'), {
         slidesToShow: 1,
         slidesToScroll: 1,
        // draggable: true,
         dots: '.carousel__indicadores', //indicadores
         arrows: {
           prev: '.carousel__anterior',
           next: '.carousel__siguiente'
         },
         responsive: [
           {
             // screens greater than >= 775px
             breakpoint: 400,
             settings: {
               // Set to `auto` and provide item width to adjust to viewport
               slidesToShow: 2, //muestra dos cartas
               slidesToScroll: 2,
               itemWidth: 150,
               duration: 0.25
             }
           },{
             // screens greater than >= 1024px
             breakpoint: 1024,
             settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
               itemWidth: 150,
               duration: 0.25
             }
           }
         ]
       });
 
 });