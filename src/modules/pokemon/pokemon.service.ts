import database from '../../models'
import MySQLProvider from '../../providers/mysql'

const connection = new MySQLProvider()

export default class PokemonService {
  public async getAllPokemon() {
    try {
      const result = await database.pokedex_dataset.findAll()

      if (!result) {
        return { message: 'Data not found', result: null }
      }

      return { message: true, result: result }
    } catch (error) {
      throw error
    }
  }

  public async getPokemonById(id: number) {
    try {
      const result = await database.pokedex_dataset.findByPk(id)

      if (!result) {
        return { message: 'Data not found', result: null }
      }

      return { message: true, result: [result] }
    } catch (error) {
      throw error
    }
  }

  public async pokemonStatisticType1() {
    try {
      const result = await database.pokedex_dataset.findAll({
        attributes: ['type_1', [connection.getConnection().fn('COUNT', connection.getConnection().col('type_1')), 'total']],
        group: ['type_1'],
        raw: true
      })

      return { message: true, result: result }
    } catch (error) {
      throw error
    }
  }

  public async pokemonStatisticType2() {
    try {
      const result = await database.pokedex_dataset.findAll({
        attributes: ['type_2', [connection.getConnection().fn('COUNT', connection.getConnection().col('type_2')), 'total']],
        group: ['type_2'],
        raw: true
      })

      return { message: true, result: result }
    } catch (error) {
      throw error
    }
  }

  public async top5Pokemon() {
    try {
      const result = await database.pokedex_dataset.findAll({
        order: [['total_points', 'DESC']],
        limit: 5
      })

      if (!result) {
        return { message: 'data not found', result: null }
      }

      return { message: true, result: result }
    } catch (error) {
      throw error
    }
  }
}
