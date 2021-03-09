/*Modificar el programa 10. Ara el programa només ha de poder donar 5 beques.
El programa anirà demanant les dades dels alumnes fins que es donin aquestes 5 beques. 
Un cop el programa hagi assignat les 5 beques s’ha de mostrar per pantalla els noms 
dels 5 alumnes que tenen beca.*/


function miFuncion() {

  let alumnes=document.getElementById("cajaTexto").value;             //Assignem la caixa de text per introduir els numeros dels alumnes on quedaran enmagatzemats dins la variable "alumnes"
  let noms=[];                                                        //Declarem les diferents variables com a Arrays amb espais de memoria
  let edat=[];
  let titul=[];
  let atur=[];
  let aprovats=[];
  let beques=0                                                        //Declarem la variable beques per poder executar el bucle For
  

      do {                                                            //bucle Do amb la condició de que executi un prompt per a cada iteració
      noms=prompt("Escriu el teu nom");                               //Executem promt per demanar el nom
      edat=Number(prompt("Quina es la teva edat?"));                  //Executem promt per demanar l'edat
      titul=confirm("Si tens títol universitari, clica a Aceptar");   //Executem una finestra de valor booleà (Si/No)
      atur=confirm("Si estás al atur, clica a Aceptar")
      beques++;

      if (edat >=18 && (titul ==true || atur ==true)) {               //Si l'alumne es major d'edat, disposa d'un titol o está al atur es concedirá la beca
      aprovats.push(noms);                                            //afegim els valors en l'ultima posició
      }
      }
        while (beques <= 4);              //El bucle while demanará un numero nomes 5 beques
        document.getElementById("mostrarDatos").innerHTML=("S'han acceptat les 5 beques als alumnes: " + aprovats ); //Ens mostra per pantalla els alumnes amb els valors per tenir la beca
        console.log(aprovats)
    }
    
  
    
  