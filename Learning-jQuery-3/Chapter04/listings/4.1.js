$(() => {
  const $speech= $('div.speech'); // sto es un apuntdor haces una caonstante que apunta a un elemento 
  const defaultSize = parseFloat($speech.css('fontSize'));
  // $('#switcher-large')
  //   .click(() => {
  //     const num = parseFloat($speech.css('fontSize'));
  //     $speech.css('fontSize', `${num * 1.2}px`);
  //   });
  const sizeMap={
    'switcher-small' : n=> n/1.2,
    'switcher-large' : n=> n*1.2,
    'switcher-default': () => defaultSize
  };
  //cuando se manda a llamar hide y show se cambia la propiedad display de css
  $('#switcher button')
  .click((e) => { // esa e es donde se captura la referencia al elemento donde se hace el evento
    const num = parseFloat($speech.css('fontSize'));
    // dependeiendo de cual se halla presionado va a 
    //$speech.css('fontSize', `${sizeMap[e.target.id](num)}px`);
    //lo de arriba se puede sustituir con el metodo animate de la siguiente forma:
    $speech.animate({ //en este caso se ve como un efectito de animasion a diferencia de con lo de arriba
      fontSize: `${sizeMap[e.target.id](num)}px`
      });
  });

  // $('p').eq(1).hide();

  // $('a.more') //una liga con clase more, si le quito eso igual va a funcionar porque solo hay un a
  // .click((e) => {
  //   e.preventDefault(); //es para cancelar el comportaiento default del elemento
  //   $('p').eq(1).slideDown(500);//fadeIn(800);//show(600);
  //   $(e.target).hide();
  // });
  const $firstPara = $('p').eq(1).hide();
  $('a.more')
    .click((e) => {
    e.preventDefault();
    //$firstPara.slideToggle(500);                     //caso para true : caso para false
    $firstPara.animate({
      opacity: 'toggle',
      height: 'toggle'
      }, 800)
    $(e.target).text($(e.target).text() === 'read more' ? 'read less' : 'read more'); //operador ternario ♥

    //lo de arriba es una forma mas corta para lo que hay abajo
    // if ($firstPara.is(':hidden')) {
    //   $firstPara.slideDown(500);
    //   $(e.target).text('read less');
    // } else {
    //   $firstPara.slideUp(500);
    //   $(e.target).text('read more');
    // }
  });

  $('div.label')
  .click((e) => {
    const $switcher = $(e.target).parent();
    const paraWidth = $('div.speech p').outerWidth();
    const switcherWidth = $switcher.outerWidth();
    // $switcher.animate({
    //   borderWidth: '5px',
    //   left: paraWidth - switcherWidth,
    //   height: '+=20px'
    //   }, 500);
    // });

    //en la parte de arriba los cambios se hacen en simultaneo, aqui se hacen en cola de una por una
    // $switcher
    // .css('position', 'relative')
    // .animate({ borderWidth: '5px' }, 'slow')
    // .animate({ left: paraWidth - switcherWidth }, 'slow')
    // .animate({ height: '+=20px' }, 'slow');
    // });
    
    //mas ejemplos de ejecusion en cola
    // $switcher
    // .css('position', 'relative')
    // .fadeTo('fast', 0.5)
    // .animate({ left: paraWidth - switcherWidth }, 'slow')
    // .fadeTo('slow', 1.0)
    // .slideUp('slow')
    // .slideDown('slow');
    // });

    //aqui se puede hacer una combinacion entre eventos en cola y simultaneos
    // $switcher
    // .css('position', 'relative')
    // .fadeTo('fast', 0.5)
    // .animate(
    // { left: paraWidth - switcherWidth },
    // { duration: 'slow', queue: false }
    // )
    // .fadeTo('slow', 1.0)
    // .slideUp('slow')
    // .slideDown('slow');
    // });

    //los siguientes dos fragmentos son un ejemplo del uso de la funcion queue
    // $switcher
    // .css('position', 'relative')
    // .fadeTo('fast', 0.5)
    // .animate(
    // { left: paraWidth - switcherWidth },
    // { duration: 'slow', queue: false }
    // )
    // .fadeTo('slow', 1.0)
    // .slideUp('slow')
    // .css('backgroundColor', '#f00')
    // .slideDown('slow');
    // });

    $switcher
    .css('position', 'relative')
    .fadeTo('fast', 0.5)
    .animate(
    { left: paraWidth - switcherWidth },
    { duration: 'slow', queue: false }
    )
    .fadeTo('slow', 1.0)
    .slideUp('slow')
    .queue((next) => {
      $switcher.css('backgroundColor', '#f00');
      next();
      })
      .slideDown('slow');
    });

    // $('p').eq(2).css('border', '1px solid #333');
    // $('p').eq(3).css('backgroundColor', '#ccc').hide()
    $('p')
    .eq(2)
    .css('border', '1px solid #333')
    .click((e) => {
      $(e.target)
      .next()
      .slideDown('slow', () => {
      $(e.target).slideUp('slow');
      });
    });
    $('p')
    .eq(3)
    .css('backgroundColor', '#ccc')
    .hide();

// 1. Alter the stylesheet to hide the contents of the page initially. When the page is loaded, fade in the contents slowly.
$('body').fadeIn(2000);
// 2. Give each paragraph a yellow background only when the mouse is over it.
$('p').hover(function(e){
  $(e.target).css('backgroundColor', '#ff0');
},function(e){
  $(e.target).css('backgroundColor', '#fff');
})
// 3. Make a click on the title (<h2>) and simultaneously fade it to 25 percent opacity and grow its left-hand margin to 20px. 
// Then, when this animation is complete, fade the speech text to 50 percent opacity.
$('h2')
.click((e) => {
  $(e.target)
  .fadeTo('0.25')
  .css('margin-left: 20px')
  .slideDown('slow', () => {
  $(e.target).slideUp('slow');
  });
});
$('p')
.eq(3)
.css('backgroundColor', '#ccc')
.hide();

// 4. Here's a challenge for you. React to presses of the arrow keys by smoothly moving the switcher box 20 pixels in the corresponding direction. The key codes
// for the arrow keys are: 37 (left), 38 (up), 39 (right), and 40 (down)


});

