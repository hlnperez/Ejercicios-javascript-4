function miFuncion() {

  let alumnes=document.getElementById("cajaTexto").value;             //Assignem la caixa de text per introduir els numeros dels alumnes on quedaran enmagatzemats dins la variable "alumnes"
  let noms=[];                                                        //Declarem les diferents variables com a Arrays amb espais de memoria
  let edat=[];
  let titul=[];
  let atur=[];
  let aprobats=[];
  let x                                                               //Declarem la variable x per poder executar el bucle For
 
  for (let x = 0; x < alumnes; x++) {                                 //Bucle for, repeteix desde valor 0 la variable x, mentres sigui menor a num d'alumnes, incrementara x en una unitat.
      noms=prompt("Escriu el teu nom");                               //Executem promt per demanar el nom
      edat=Number(prompt("Quina es la teva edat?"));                  //Executem promt per demanar l'edat
      titul=confirm("Si tens títol universitari, clica a Aceptar");   //Executem una finestra de valor booleà (Si/No)
      atur=confirm("Si estás al atur, clica a Aceptar")               //Executem una finestra de valor booleà (Si/No)

      if (edat >=18 && (titul ==true || atur ==true)) {               //Si l'alumne es major d'edat, disposa d'un titol o está al atur es concedirá la beca
      aprobats.push(noms);                                            //afegim els valors en l'ultima posició
      }

    document.getElementById("mostrarDatos").innerHTML=("S'ha acceptat la beca als alumnes: " + aprobats );  //Ens mostra per pantalla els alumnes amb els valors per tenir la beca
    
    console.log(aprobats);
  
}

}
  

  










