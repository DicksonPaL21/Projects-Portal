<?php
  $servername = "localhost";
  $username   = "root";
  $password   = "";
  $dbname     = "projects_portal_db";

  $mysqli = new Mysqli( $servername, $username, $password, $dbname );

  if ( $mysqli->connect_error ) {
    die( "Connection Failed : " . $mysqli->error );
  }
?>
