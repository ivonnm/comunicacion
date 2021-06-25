<?php
function retornarConexion() {
  $con=mysqli_connect("localhost","root","","comunicacion");
  return $con;
}
?>