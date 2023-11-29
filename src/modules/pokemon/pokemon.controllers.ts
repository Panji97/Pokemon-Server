import { Request, Response } from 'express'
import ErrorHandler from '..//error'
import PokemonService from './pokemon.service'

export default class PokemonControllers extends ErrorHandler {
  private service: PokemonService

  constructor() {
    super()
    this.service = new PokemonService()
  }

  public show() {
    return async (req: Request, res: Response) => {
      try {
        const data = await this.service.getAllPokemon()

        return res.status(200).json({ message: data.message, result: data.result })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }

  public showById() {
    return async (req: Request, res: Response) => {
      try {
        const data = await this.service.getPokemonById(Number(req.params.id))

        return res.status(200).json({ message: data.message, result: data.result })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }

  public statisticType1() {
    return async (req: Request, res: Response) => {
      try {
        const data = await this.service.pokemonStatisticType1()

        return res.status(200).json({ message: data.message, result: data.result })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }

  public statisticType2() {
    return async (req: Request, res: Response) => {
      try {
        const data = await this.service.pokemonStatisticType2()

        return res.status(200).json({ message: data.message, result: data.result })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }

  public top5() {
    return async (req: Request, res: Response) => {
      try {
        const data = await this.service.top5Pokemon()

        return res.status(200).json({ message: data.message, result: data.result })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }
}
