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

