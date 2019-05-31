
function aceptarNombre(){
/*
    Proposito: Describir que el nombre ingresado es correcto.
    Precondicion:
                  *El elemento dentro del TextBox debe ser del tipo 'String'
*/
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  alert("Su nombre completo es: "+nombre+" "+apellido);
            //despues del elemento alert el valor de los textbox pasa a ser ''
  document.getElementById('nombre').value ='';
  document.getElementById('apellido').value ='';

}
