function resumeStatistique(valeurs) {
  const n = valeurs.length;
  if (n === 0) {
    return { n: 0, moyenne: null, ecart_type: null };
  }

  const moyenne = valeurs.reduce((total, valeur) => total + valeur, 0) / n;
  const variance =
    valeurs.reduce((total, valeur) => total + (valeur - moyenne) ** 2, 0) / n;
  const ecartType = Math.sqrt(variance);

  return {
    n,
    moyenne: Math.round(moyenne * 100) / 100,
    ecart_type: Math.round(ecartType * 100) / 100,
  };
}

const accidentsParMois = [220, 234, 233, 233, 263, 295, 277, 263, 274, 269, 219, 220];
console.log(resumeStatistique(accidentsParMois));
console.log(resumeStatistique([]));
