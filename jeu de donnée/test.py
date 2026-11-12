import pandas as pd

df = pd.read_csv("lieux-2025.csv", sep=";", dtype={"Num_Acc": str})

print(df.head(5).to_string(index=False))
# Garder un seul département et les colonnes utiles
