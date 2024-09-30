export interface Statistique {
  id: number
  match_joue: number // Nombre de matchs joués
  nul: number // Nombre de matchs nuls
  defaite: number // Nombre de défaites
  victoire: number // Nombre de victoires
  but_encaisser: number // Nombre de buts encaissés
  but_marquer: number // Nombre de buts marqués
  difference_but: number // Différence de buts (but_marquer - but_encaisser)
  points: number // Points obtenus par l'équipe
  equipeId: number // Référence à l'équipe (clé étrangère)
}
