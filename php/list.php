<?php
  require_once '../core/init.php';

  function validateFormData( $formData ) {
    return trim( stripslashes( htmlspecialchars( strip_tags( str_replace( array( '(', ')' ), '', $formData ) ), ENT_QUOTES ) ) );
  }

  if( isset( $_POST[ 'search' ] ) ) {
    $q   = validateFormData( $_POST[ 'search' ] );
    $sql = "SELECT * FROM weblist WHERE Name LIKE '$q%'";
    
    $result = '';
    
    $loader = '<div class="sk-fading-circle">
                 <div class="sk-circle1 sk-circle"></div>
                 <div class="sk-circle2 sk-circle"></div>
                 <div class="sk-circle3 sk-circle"></div>
                 <div class="sk-circle4 sk-circle"></div>
                 <div class="sk-circle5 sk-circle"></div>
                 <div class="sk-circle6 sk-circle"></div>
                 <div class="sk-circle7 sk-circle"></div>
                 <div class="sk-circle8 sk-circle"></div>
                 <div class="sk-circle9 sk-circle"></div>
                 <div class="sk-circle10 sk-circle"></div>
                 <div class="sk-circle11 sk-circle"></div>
                 <div class="sk-circle12 sk-circle"></div>
               </div>';
    
    $res = $mysqli->query( $sql );
    while( $row = $res->fetch_assoc() ) {
    $result .= '<div class="box">
                  <div class="thumbnail">
                    <img alt="' . $row[ 'Name' ] . '" src="img/' . $row[ 'Thumbnail' ] . '">
                  </div>
                  <a class="content" href="' .$row[ 'Resource' ] . '" target="_blank"  title="' . $row[ 'Description' ] . '">
                    <h3>' . $row[ 'Name' ] . '</h3>
                    <p>' . $row[ 'Description' ] . '</p>
                  </a>
                </div>';
    }
    
    echo $result ? $result : $loader;
  }
?>
