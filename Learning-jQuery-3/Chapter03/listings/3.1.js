$(() => {
  
//   $('#switcher-large')
//   .on('click', function() {
//     $('body').addClass('large').removeClass('narrow');
//   });
// //en una funcion flecha no existe realmente this
//   $('#switcher-default')
//     .addClass('selected')
//     .on('click', function() {
//     $('body').removeClass('narrow').removeClass('large');
//     })

//   $('#switcher-narrow')
//   .on('click', function() {
//     $('body').addClass('narrow').removeClass('large');
//   });

//   $('#switcher button')
//   .on('click', function() {
//     $('#switcher button').removeClass('selected');
//     $(this).addClass('selected');
//     });
    //$('#switcher-default').addClass('selected');

    // $('#switcher button')
    //   .click(function() {
    //     const bodyClass = this.id.split('-')[1]; //switch-narrow con el split separa cuando encuentre un "-" entonces habran dos palabras la palabra cero "switcher" y la palabra 1 "narrow", se queda con narow para ponerle la clase
    //     $('body').removeClass().addClass(bodyClass);
    //     $('#switcher button').removeClass('selected');
    //     $(this).addClass('selected');
    // });


    //   $('#switcher h3')
    //   .click(function() {
    //   $(this)
    //   .siblings('button') // h3 y los buttons estan en la misma jerarquia, estan al mismo nivel por eso son sus sibilings
    //   .toggleClass('hidden');
    //   });
 
    //ahi cuando le puche al boton tambien se va a esconder
      // $('#switcher')
      // .click(function() {
      //   $('#switcher button').toggleClass('hidden');
      // });

      // $('#switcher')
      // .click(function(event) { // vas a estar haciendo una funcion que cheque el evento
      //   if(event.target ==this){ //si el evento courrio por un determinado target osea este evento osea el div pues entonces va a ocultar a los botones, si no quiere decir que se presiono otra cosa
      //     $(this).children('button').toggleClass('hidden');
      //   }        
      // });

      const triggers = {
        d: 'default',
        n: 'narrow',
        l: 'large'
      }
      
      
      $(document)
      .keyup((e) => { // Eso es para eventos con el teclado
        const key = String.fromCharCode(e.which).toLowerCase(); // en chrome y edge jala sin el toLowercase() pero para asegurar el funcionamiento en todos los buscadores, por eso tambien el arreglo lo cambie a minusculas originalmente estaba en mayusculas
        if (key in triggers) {
        $(`#switcher-${triggers[key]}`).click();
        }
        });
      
      $('#switcher-default').addClass('selected');

      $('#switcher button')
      .click((e)=>{
        const bodyClass= e.target.id.split('-')[1];
        $('body').removeClass().addClass(bodyClass);
        $('#switcher button').removeClass();
        $(e.target).addClass('selected')

        e.stopPropagation();
      })

      $('#switcher-narrow, #switcher-large')
        .click(()=>{
          $('#switcher').off('click.collapse');
        });

      $('#switcher') 
        .on(('click.collapse'),(e) => {
        $(e.currentTarget).children('button').toggleClass('hidden');
      });
     
      $('#switcher h3') // nuevamente busca el id switcher y el espacio indica el hijo que en este caso es h3
      .hover(function() {
      $(this).addClass('hover');
      }, function() {
      $(this).removeClass('hover');
      });
      $('#switcher').trigger('click.collapse');
    //1. When Charles Dickens is clicked, apply the selected style to it.
      $('#header') 
      .on(('click.autor'),(e) => {
      $(e.currentTarget).children('div').addClass('selected');
    });        
    //2. When a chapter title (<h3 class="chapter-title">) is double-clicked, toggle the visibility of the chapter text
    $('.chapter-title')
     .dblclick(function(e){
      $(e.currentTarget).toggleClass('hidden');  
     });
    //3. When the user presses the right arrow key, cycle to the next body class. The key code for the right arrow key is 39.
});
