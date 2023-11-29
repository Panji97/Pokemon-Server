import { Router } from 'express'
import PokemonControllers from './pokemon.controllers'

export default class PokemonRoutes {
  private router: Router
  private controller: PokemonControllers

  constructor() {
    this.router = Router()
    this.controller = new PokemonControllers()
  }

  routes(): Router {
    this.router.get('/v1/show', this.controller.show())
    this.router.get('/v1/show/:id', this.controller.showById())
    this.router.get('/v1/statisticType1', this.controller.statisticType1())
    this.router.get('/v1/statisticType2', this.controller.statisticType2())
    this.router.get('/v1/top5', this.controller.top5())

    return this.router
  }
}
