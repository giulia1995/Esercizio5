/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let crazySum = function (x, y) {
  if (x === y) {
    return (x + y) * 3;
  } else {
    return x + y;
  }
};
let risultato = crazySum(2, 2);
console.log(risultato);
/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let boundary = function (a) {
  if((a >= 20 && a <= 100) || a === 400){
     return true
  } else {
    return false
  }
};
let ritorno = boundary(300);
console.log(ritorno);


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let reverseString = function(text) {
    let stringa = "";
    for(let i =text.length -1;i>= 0;i--) {
      stringa += text[i];
    }
    return stringa;
  }
  let text = "EPICODE";
  let stringaInvertita = reverseString(text);
  console.log(stringaInvertita);

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let upperFirst=function(testo) {
    let parola= testo.split(" ") 
    for (let i= 0; i<parola.length; i++){
    let lettera=parola[i];  
    parola[i]=lettera.charAt(0).toUpperCase() + lettera.slice(1)  
    }
    return parola.join(" ")
}
let parolaFinale= upperFirst("giovanni muchacha")
console.log(parolaFinale);
/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let giveMeRandom=function(n) {
    let numero=[]
    for (let i=0; i<=n;i++){
    let randomNumero= Math.round(Math.random()*11);
    numero.push(randomNumero) 
    }
    return numero
}
let result=giveMeRandom(8)
console.log(result);

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let area=function(l1,l2){
    return l1*l2
}
let lato1=12
let lato2=20
let areaDelRettangolo= area(lato1,lato2)
console.log(areaDelRettangolo);
/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let crazyDiff=function(a,b){
  if((a-b)>19){
    return Math.abs(a-b)*3
  } else {
    return Math.abs(a-b)
  }
}
let differenza=crazyDiff(51,19)
console.log(differenza)
/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let codify=function(str){
  if(str.startsWith("code")){
    return str
  } else{
    return "code"+str
  }
}
console.log(codify("coders"))
console.log(codify("Hello"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let check3and7=function(x){
  if(x>=0 && (x%3===0 || x%7===0)){
    return true
  } else {
    return false
  }
}
console.log (check3and7(70))
/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let cutString= function(str){
  
}
