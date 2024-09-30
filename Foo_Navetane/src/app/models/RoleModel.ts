export class Role {
  id: number
  nom: string // Nom du rôle (ex: admin, Zone , Equipe)

  constructor (id: number, nom: string) {
    this.id = id
    this.nom = nom
  }
}
