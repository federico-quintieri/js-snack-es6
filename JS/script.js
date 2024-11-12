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

// Printo l'array di oggetti prima di modificare le proprietà
// console.log(arraySquadre);

const arrayResult = [];

// Ciclo l'array
for (let i = 0; i < arraySquadre.length; i++) {
  const currObject = arraySquadre[i];
  // Printo ogni oggetto nell'array
  //   console.log(currObject);

  // Devo cambiare le proprietà punti fatti e falli subiti
  currObject["falli subiti"] = getRndInteger(0, 10);
  currObject["punti fatti"] = getRndInteger(0, 10);

  //   console.log(currObject);

  arrayResult.push(
    currObject["nome squadra"] + " " + currObject["falli subiti"]
  );
}

// Printo l'array di oggetti dopo aver modificato le proprietà
console.log(arraySquadre);

// Stampiamo l'array che contiene stringhe (Nome squadra + falli subiti)
console.log(arrayResult);

// Ritorna numero random
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
