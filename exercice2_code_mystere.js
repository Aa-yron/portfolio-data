// Exercice 2 : « Explique-moi ce code »
// Que fait cette fonction ? Demandez à l'IA de l'expliquer ligne par ligne,
// puis de proposer de meilleurs noms de variables.

function f(a, k) {
  const r = [...a];
  let c = true;
  while (c) {
    c = false;
    for (let i = 0; i < r.length - 1; i++) {
      const x = r[i][k];
      const y = r[i + 1][k];
      if (x < y) {
        const t = r[i];
        r[i] = r[i + 1];
        r[i + 1] = t;
        c = true;
      }
    }
  }
  return r.slice(0, 3);
}

const d = [
  { n: "Calvados", v: 230 },
  { n: "Eure", v: 162 },
  { n: "Manche", v: 187 },
  { n: "Orne", v: 118 },
  { n: "Seine-Maritime", v: 369 },
];

console.log(f(d, "v"));
