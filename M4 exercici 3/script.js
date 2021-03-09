
function miFuncion(){

let num=Number(num)                       //Declarem la variable num com a símbol numeric
var preg=Math.ceil(Math.random() * 10);   //Declarem la variable per a la funció aleatoria matemàtica
var x                                     //Declarem la variable x per a executar el bucle Do While

 do {
   num[num.length]=(prompt("Introdueix un numero del 1 al 10 per endevinar")); // ens mostra el número del usuari a la nostra consola
   preg[preg.length];
   x++
   } while (x <= 10 || num[x] != preg[x])      //Executa el Bucle while, mentre l'usuari no encerti el número aleatori, el prompt demanará un número diferent per a encertar-lo.

 if (x < 5) {                                //Executem la condició if per declarar que només surtirán 5 prompts per encertar número
   prompt=("Has superat els 5 intents!, el número correcte es: "+ preg[x])
   
   } else if (num[x]==preg[x]) {
    window.alert("Enhorabona, El número és "+ preg)  //mostra el missatge final per pantalla
    }
}