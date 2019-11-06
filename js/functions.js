window.onload = function () {
    var ScrollMsg= 'Projects Portal ● '
    var CharacterPosition = 0
    function StartScrolling() {
        document.title = ScrollMsg.substring( CharacterPosition, ScrollMsg.length )
                    + ScrollMsg.substring( 0, CharacterPosition )
        CharacterPosition++
        if ( CharacterPosition > ScrollMsg.length ) CharacterPosition = 0
            window.setTimeout( StartScrolling, 500 )
    } StartScrolling()
}

window.onpageshow = window.onresize = function() {
    var header = document.getElementsByTagName('header')[0]
    if ( header.lastElementChild.className == 'jumbotron' ) {
        var jumbotron = document.getElementsByClassName('jumbotron')[0]
        jumbotron.style.minHeight = 341;
    }
}

function goTo( id ) {
  var elem = document.getElementById( id )
  try {
    window.scrollTo( {
      'behavior': 'smooth',
      'left': 0,
      'top': ( 316 + elem.offsetTop ) - 10
    } )
  } catch( err ) {
    scroll( 0, 0 )
  }
}