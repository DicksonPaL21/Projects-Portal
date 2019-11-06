var navList = ''
 navList += '<a href="index.php">HOME</a>'	
 navList += '<a href="resume.php">RESUME</a>'	
// navList += '<a href="contact.php">CONTACT</a>'
 //navList += '<a href="javascript:goTo(\'academic\')">ABOUT</a>'	

var navWrapper = document.querySelector( 'nav .nav-wrapper' )
navWrapper.innerHTML = navList + navWrapper.innerHTML

var nav = document.querySelector( 'nav' )

window.onscroll = function () {
    if ( window.pageYOffset > 0 ) {
        nav.style.boxShadow = '0 0 10px 5px rgba(0, 0, 0, 0.6)' //'0 6px 10px rgba(0, 0, 0, 0.6)'
    } else {
        nav.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.3)'
    }
    
    var toTopBtn = document.querySelector( '#toTop' )
    if ( window.pageYOffset > 310 )
        toTopBtn.style.display = 'block'
    else toTopBtn.style.display = 'none'
    
	toTopBtn.onclick = function () {
		try {
			window.scrollTo( {
				'behavior': 'smooth',
				'left': 0,
				'top': 0
			} )
		} catch( err ) {
			scroll( 0, 0 )
		}
	}
}