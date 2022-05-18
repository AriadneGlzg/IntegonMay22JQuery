$(() => { //esto se opera ene el moemnto que se carga la pagina 
  // $('div.chapter a') // por selectores es del div con la clase charter, todas las ligas que tengamos
  //   .attr({ rel: 'external', title: 'Info from wikipedia♥', id: index => `wikilink-${index}` }); //el metodo attr es para cambiar atributos
  $('div.chapter a')
  .attr({
    real:'external',
    title:function(){
      return`Learn more about ${$(this).text()} at Wikipedia`;
    },
    id: index => `wikilink-${index}`
  });

  $('#hide-read')
  .change((e) => {
   if ($(e.target).is(':checked')) {
    $('.chapter p')
    .filter((i, p) => $(p).data('read')) //parece ser que read es solo una keyword determinada por quien la pone podria ser otra cosa como 'ositos' y funcionaria
    .hide();
   } else {
    $('.chapter p').show();
   }
  });

  $('.chapter p')
  .click((e) => {
    const $elm = $(e.target);
    $elm
    .css(
    'textDecoration',
    $elm.data('read') ? 'none' : 'line-through'
    )
    .data('read', !$(e.target).data('read')); //funcion data varia el atributo 'read'
  });

  //estos dos elementos insertan lementos nuevos al html
  //$('<a href="#bottom">back to top</a>').insertAfter('div.chapter p'); //el #top es una referencia al top de la pagina
  $('<a id="top"></a>').prependTo('body'); //aqui estamos insertando un elemento no existente con el metodo pretendTo
  //aqui solo se mueve de lugar elementos ya existentes en el html
  //$('span.footnote').insertBefore('#footer');//vamos a cambiar de lugar un elemento que ya existia 
  // $('span.footnote')
  // .insertBefore('#footer')
  // .wrapAll('<ol id="notes"></ol>')
  // .wrap('<li></li>');

  //lo de arriba puede hacerse con una iteracion explicita como la de abajo
  const $notes = $('<ol id="notes"></ol>')
    .insertBefore('#footer');
  $('span.footnote')
    .each((i, span) => {
       $(`<sup>${i + 1}</sup>`) //ademas aqui se pone la cita(el numero de cita en un <sup>) al final del parrafo
      .insertBefore(span);
      $(span)
      .clone() //clona el original, es decir se hizo una clonada de los spans y ahora el clone es lo que se va a wrappear ♥
      .appendTo($notes)
      .wrap('<li></li>');
  });

// 1. Alter the code that introduces the back to top links, so that the links only appear after the fourth paragraph.
$('div.chapter p').each((i,p)=>{
  if(i>=3){
      $('<a href="#top">back to top</a>').insertAfter($(p));
  }
});
  
// 2. When a back to top link is clicked on, add a new paragraph after the link containing the message You were here.
// Ensure that the link still works.
$('a[href="#top"]').click(function(e){
  $('<p>You were here ♥</p>').insertAfter($(e.target));
});
// 3. When the author's name is clicked, turn it bold (by adding an element, rather than manipulating classes or CSS attributes).

// 4. Challenge: On a subsequent click of the bolded author's name, remove the <b> element that was added
//  (thereby toggling between bold and normal text).
// 5. Challenge: Add a class of inhabitants to each of the chapter's paragraphs without calling .addClass(). 
// Make sure to preserve any existing classes
});
