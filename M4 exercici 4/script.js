function miFuncion() {

var preg=(Math.ceil(Math.random() * 10))                             //Declarem la variable preg com a operació aleatoria numèrica
var numero;   //Declarem variable num com a prompt per introduir un numero al atzar
var intent = 0;                                                      //Declarem la variable intent, on la seva llargària comença per 1

console.log(numero)

do {                                           //bucle Do amb la condició de que executi un prompt per a cada iteració
  numero=Number(prompt("Introdueix el numero de nou, si us plau. En total portes " + intent + " intents"));
  intent++;

 if (numero == preg && intent>=0) {           //Executem la condició if per a que ens mostri si hem encertar quan les variables num i preg son iguals en qualsevol intent
    window.alert("Enhorabona!, el número encertat es " + preg + ", i has necessitat " + intent + " intents");

  } else if (numero != preg && intent>=5) {           //Executem la condició if per a que ens mostri si hem encertar quan les variables num i preg son iguals
    window.alert("Has fet mes de 5 intents, el número correcte es " + preg);    //Ens mostra per pantalla els intents que hem assolit i el resultat de la operacio aleatoria
 }
}
  while (numero != preg && intent<5);       //El bucle while demanará un numero nomes 5 vegades mentres el numero no coincideixi amb la operacio aleatoria.

}


