$(() => {
  //todo lo que es en el $() es el dichoso selector
  $('#selected-plays > li').addClass('horizontal');
 // en este caso de la ul que tiene el id="selected-plays" va a ser el primer hijo de las li dentro de ul

  $('#selected-plays li:not(.horizontal)').addClass('sub-level');
     // seria todo lo que no tenga la clase "horizonta" le va a agregar la clase sub level por lo tanto el resto de los li van a ser morados
  $('#selected-plays li:not(.sub-level)').addClass('big-letter');
// en los parentesis es la iteracion[] primero dices sonre que atributo debe ser igual a que
  $('a[href^="mailto:"]').addClass('mailto'); // si inicia con lo que haya despues del gorrito ^ 
  // es una iteracion y se fija que en todas las a en su hrfer tengan el atributo mailto
  $('a[href$=".pdf"]').addClass('pdflink'); // el dolar significa si es cosa acaba con lo que va despues del $
  //en este caso debe cumplir las dos condiciones, primero te va a checar el primer [] despues el [] y esas dos condiciones asi [][] son una AND
  $('a[href^="http"][href*="henry"]').addClass('henrylink'); // el * es que en algun lugar contenga el texto henry
  // si como en ese caso las condiciones estan asi [],[] se interpreta como una OR
  //$('a[href^="http"],[href*="henry"]').addClass('henrylink'); // el * es que en algun lugar contenga el texto henry
  $('tr:even').addClass('alt'); //empieza en el primero en pintar en moradito pporque es 0 y el cero se considera par
   //$('tr:nth-child(even)').addClass('alt'); //aqui empieza a mumerar en 1 por eso empieza en el segundo a pintar en moradito
  $('tr').filter(':even').addClass('alt');
  $('a')
  .filter((i,a)=> //ahi el i es el indice del elemento que cumple con la condicion, y el a es el elemento que se itera, en realidad puede ser lo que sea, ose podria poner e,vinculo y va a jalar pero deben estar esas dos
    a.hostname && a.hostname !== location.hostname //location es una palabra reservada digamos que es en donde estamos
  )
  .addClass('external');

//$('td:contains(Henry)').addClass('highlight'); //otra forma usando celdas
// $('td:contains(Henry)')
// .next()
// .next().addClass('highlight'); //aqui encuentra a henrry y brinca la sigueinte y en lasiguiente ahi haces la addClass, ahi me marcaria las fechas

// $('td:contains(Henry)')
// .nextAll().addClass('highlight'); //encuentra a la celda que tiene a henry y le aplica a la modificacion a todo lo que siga de esa celda

// $('td:contains(Henry)')
// .nextAll()
// .addBack().addClass('highlight'); //en este caso seria a todas las que siguen de Henry y el addback va a regresarse a henry (esta encadenadito)

// $('td:contains(Henry)')
// .parent() // va a ubir car al padre de la celda donde haya un henry
// .children().addClass('highlight'); //ahora el tr es el padre los hijos serian todas las celdas dentro de ese tr, por lo tanto aplicaria a todas las celdas td dentro de ese tr

// $('td:contains(1606)') // va a encontrar la celda con "1606" pero le va a hacer la modificacion en la celdas previas
// .prev()
// .prev().addClass('highlight'); 

$('td:contains(Henry)') // Find every cell containing "Henry"
.parent() // Select its parent
  .find('td:eq(1)') // Find the 2nd descendant cell
  .addClass('highlight') // Add the "highlight" class
.end() // Return to the parent of the cell containing "Henry", termina el query y regresa al principal
  .find('td:eq(2)') // Find the 3rd descendant cell
  .addClass('highlight'); // Add the "highlight" class
  
  const eachText = [];
  $('td')
  .each((index, cell) => { //eso puede ser lo que sea (i,e) (hola,adios)
  if (cell.textContent.startsWith('H')) {
  eachText.push(`${index} ${cell.textContent}`); // ese index lo que entrega es el numero que tiene ese elemento en el documento la numeracion empieza en 1, dentro de ese padre obvio
  }
  });
  console.log('each', eachText);
  // ["Hamlet", "Henry IV, Part I", "History", "Henry V", "History"]


  
// 1. Add a class of special to all of the <li> elements at the second level of the nested list. 
$('#selected-plays > li > ul > li').addClass('special');
// 2. Add a class of year to all the table cells in the third column of a table.
$('tr')
.each((index, cell) => { 
  $('tr').find('td:eq(2)').addClass('year');
});
// 3. Add the class special to the first table row that has the word Tragedy in it.
$('tr:contains(Tragedy)').eq(0).addClass('special');
// 4. Here's a challenge for you. Select all the list items (<li>s) containing a link (<a>). Add the class afterlink to the sibling list items that follow the ones selected. 
$('li').has('a').siblings().addClass('afterlink');
// 5. Here's another challenge for you. Add the class tragedy to the closest ancestor
// <ul> of any .pdf link.}
$('a[href$=".pdf"]').closest('ul').addClass('tragedy');

//$('a[href$=".pdf"]').parents('li').addClass('experimentillos'); eso selecciona todo el parent el ul
$('a[href$=".pdf"]').parents('li').addClass('experimentillos'); //aqui escojo solo el li que es del link que quiero 


});
