//------------------------------\\
// Primo esercizio

// Creare array oggetti
const arrayOb = [
  { nome: "Bici Corsa 1", peso: 50 },
  { nome: "Bici Corsa 2", peso: 20 },
  { nome: "Bici Corsa 3", peso: 34 },
];
// Ogni chiave è una stringa

const result = valorePiccolo(arrayOb, "peso");
console.log(result);

function valorePiccolo(arrayOggetti, nomeChiave) {
  // Imposto il primo valore ad una variabile
  let valorePiuPiccolo = arrayOggetti[0];
  // Lo vedo per sicurezza
  //   console.log(valorePiuPiccolo[nomeChiave]);

  for (let i = 0; i < arrayOggetti.length; i++) {
    const currIndex = arrayOggetti[i];

    // Ci stampa l'oggetto
    // console.log(currIndex);

    // Ci stampa il valore dentro la chiave peso
    // console.log(currIndex[nomeChiave]);

    const peso = currIndex[nomeChiave];

    // console.log(peso);

    // Se il peso è più piccolo a quello di prima lo sostituisco
    if (peso < valorePiuPiccolo[nomeChiave]) {
      //   console.log("So entrato nell'if ");
      valorePiuPiccolo = peso;
    }
  }
  // Mi ritorna il valore più piccolo
  return valorePiuPiccolo;
}

//------------------------------\\
// Secondo esercizio

const arraySquadre = [
  { "nome squadra": "Roma", "punti fatti": 0, "falli subiti": 0 },
  { "nome squadra": "Lazio", "punti fatti": 0, "falli subiti": 0 },
  { "nome squadra": "Inter", "punti fatti": 0, "falli subiti": 0 },
];
// Per accedere ad una proprietà settata come stringa dobbiamo usare le parentesi quadre
// console.log(arraySquadre[0]["falli subiti"]);

const arrayResult = [];

// Domanda
// Perché con il console log mi da l'oggetto modificato prima di modificarlo?

// Risposta
/*
Quando usi console.log per stampare un oggetto in JavaScript, la console non crea una copia immediata di quell'oggetto al momento della chiamata. 

Invece, console.log mostra un riferimento all'oggetto in memoria.

(LA PAROLA CHIAVE é RIFERIMENTO)

In pratica va per riferimento come aveva detto Loris 
*/

// Qui faccio una copia effettiva dell'oggetto per controllarlo prima e dopo la modifica
const arrayOggettiCopia = JSON.parse(JSON.stringify(arraySquadre));
console.log(
  "Questo è la copia dell'array degli oggetti prima della modifica ",
  arrayOggettiCopia
);

const arrayFinaliOggetti = modificaProprietà(
  arraySquadre,
  "punti fatti",
  "falli subiti"
);

console.log("Nuovo array oggetti: ", arrayFinaliOggetti);

console.log("Dopo la modifica dell'array originale:", arraySquadre);
console.log("La copia dell'array rimane invariata:", arrayOggettiCopia);

function modificaProprietà(
  arrayOggetti,
  proprietà_1_Oggetto,
  proprietà_2_Oggetto
) {
  // Ciclo l'array
  for (let i = 0; i < arrayOggetti.length; i++) {
    const currObject = arrayOggetti[i];
    // Printo ogni oggetto nell'array
    //   console.log(currObject);

    // Devo cambiare le proprietà punti fatti e falli subiti
    currObject[proprietà_1_Oggetto] = getRndInteger(0, 10);
    currObject[proprietà_2_Oggetto] = getRndInteger(0, 10);

    //   console.log(currObject);

    // Perché non posso passare una variabile stringa come proprietà?

    arrayResult.push({
      "nome squadra": currObject["nome squadra"],
      "falli subiti": currObject[proprietà_2_Oggetto],
    });
  }
  return arrayResult;
}

// Ritorna numero random
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//------- Terzo esercizio -------\\

const arrayTest = [5, 3, 2, 5, 6, 7, 1, 2, 5];

/**
 * La funziona ritorna un array fatto DA index A index di array ingresso
 * @param {array} arrayIngresso
 * @param {number} numeroA
 * @param {number} numeroB
 * @returns {array}
 */
function copiaArrayDA_A(arrayIngresso, numeroA, numeroB) {
  const arrayRisultato = [];
  let cont = 0;
//   console.log(numeroA, numeroB, arrayIngresso.length);

  if (numeroA < numeroB && arrayIngresso.length > numeroB) {
    for (let i = 0; i < arrayIngresso.length; i++) {
      // Valore corrente index array d'ingresso
      const currIndexValue = arrayIngresso[i];

      // Se l'indice del prima array sta in un certo intervallo copiamo i valori in un'altro array
      if (i >= numeroA && i <= numeroB) {
        arrayRisultato[cont] = currIndexValue;
        cont++;

        console.log(
          `Ecco l'array che si aggiorna${arrayRisultato}, ecco il numero dell'iterazione: ${i},Da iterazione: ${numeroA},A iterazione:  ${numeroB}`
        );
      }
    }
  }
  return arrayRisultato;
}
const arrayRisultatoModifica = copiaArrayDA_A(arrayTest, 3, 6);

console.log(`Questo è l'array iniziale: ${arrayTest}`);

console.log(`Questo è l'array modificato: ${arrayRisultatoModifica}`);
