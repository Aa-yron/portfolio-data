# Exercice 3 : convertir ce code Python en JavaScript.
# Puis vérifier que les deux versions donnent exactement le même résultat
# sur la même liste.

def resume_statistique(valeurs):
    """Renvoie le nombre de valeurs, la moyenne et l'écart-type."""
    n = len(valeurs)
    if n == 0:
        return {"n": 0, "moyenne": None, "ecart_type": None}
    moyenne = sum(valeurs) / n
    variance = sum((x - moyenne) ** 2 for x in valeurs) / n
    ecart_type = variance ** 0.5
    return {
        "n": n,
        "moyenne": round(moyenne, 2),
        "ecart_type": round(ecart_type, 2),
    }


accidents_par_mois = [220, 234, 233, 233, 263, 295, 277, 263, 274, 269, 219, 220]
print(resume_statistique(accidents_par_mois))
print(resume_statistique([]))
