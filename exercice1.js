// Verifie une adresse e-mail simple, sans espaces ni points consecutifs dans la partie locale.
function emailValide(adresse) {
  if (typeof adresse !== "string") {
    return false;
  }

  const partieLocale = "[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+";
  const etiquetteDomaine = "[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?";
  const motif = new RegExp(
    `^${partieLocale}(?:\\.${partieLocale})*@${etiquetteDomaine}(?:\\.${etiquetteDomaine})+$`
  );

  return motif.test(adresse);
}

// Affiche le resultat de validation pour chaque adresse de test.
const adresses = [
  "prenom.nom@example.com",
  "nom+tag@sous-domaine.example.fr",
  "adresse-invalide",
  "prenom..nom@example.com",
  "nom@-example.com",
  "nom@example",
];

// Lit l'adresse passée après le nom du fichier.
const adresse = process.argv[2];

if (adresse === undefined) {
  console.log("Usage : node .\\exercice1.js <adresse>");
} else {
  console.log(`${adresse} : ${emailValide(adresse)}`);
}