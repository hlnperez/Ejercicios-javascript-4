
function miFuncion(){

  var words, x; //Assignem les variables per a les paraules i "x" per realitzar el bucle For.
  var numero = (document.getElementById("cajaTexto").value); //Ens assigna que a la caixa de text hem d'introduir signes numerals
  words = [];  //A la variable words podem escriure el que vulguem
  
  var x;
  for (x = 0; x < numero; x++) {
   words[words.length] = prompt("Introdueix la verdura " + x) + "<br>";
  //Ens mostra un prompt a la pantalla, per introduir les paraules equivalents al número escrit a la caixa de text, ex: 3 - demanará 3 verdures.
  }
  console.log(words) //Ens mostra les paraules que hem afegit a la nostra consola
  
  document.getElementById("mostrarDatos").innerHTML= "les teves verdures son: " + words + "<br>";    //Ens mostra per pantalla un llistat de les verdures que hem escrit als prompts
  }