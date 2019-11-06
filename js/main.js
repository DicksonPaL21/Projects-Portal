$( '#search-icon' ).on( 'click', () => {
  $( '[role="search"]' ).focus()
} )

$( '[role="search"]' ).keyup( () => {
  var search = $( '[role="search"]' ).val()
  $.ajax( {
    url: 'php/list.php',
    method: 'POST',
    data: { search: search },
    success: ( data ) => {
      $( '.project-field' ).html( data )
    }
  } )
} )