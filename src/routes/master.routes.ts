import { Router } from 'express'
import PokemonRoutes from '../modules/pokemon/pokemon.routes'

export default class MasterRoutes {
  private router: Router
  private pokemon: PokemonRoutes

  constructor() {
    this.router = Router()
    this.pokemon = new PokemonRoutes()
  }

  routes(): Router {
    this.router.use('/pokemon', this.pokemon.routes())

    return this.router
  }
}
