import { HmacSHA256 } from 'crypto-js'
import _ from 'lodash'
import { sign } from 'jsonwebtoken'

import { KEY } from '../../gajah.json'
import database from '../../models'
import { usersAttributes } from '../../models/users'

export default class AuthenticateService {
  public async register(payload: usersAttributes) {
    try {
      const ENCRYPTED_PASSWORD = HmacSHA256(payload.password, KEY).toString()

      const USER_EXIST = await database.users.findOne({
        where: {
          email: payload.email
        }
      })

      if (USER_EXIST !== null) {
        return { message: 'Email already exist', result: null }
      }

      await database.users.create({
        email: payload.email,
        password: ENCRYPTED_PASSWORD,
        access_token: ''
      })

      return { message: 'Success register user', result: null }
    } catch (error) {
      throw error
    }
  }

  public async login(payload: usersAttributes) {
    try {
      const USER_EXIST = await database.users.findOne({
        where: {
          email: payload.email
        }
      })

      if (!USER_EXIST) {
        return { message: 'Email not found', result: null }
      }

      const ENCRYPTED_PASSWORD = HmacSHA256(payload.password, KEY).toString()

      if (ENCRYPTED_PASSWORD !== USER_EXIST.password) {
        return { message: 'Wrong password', result: null }
      }

      const ACCESS_TOKEN = sign(
        {
          id: USER_EXIST.id,
          email: USER_EXIST.email
        },
        KEY,
        {
          algorithm: 'HS256',
          expiresIn: '7d'
        }
      )

      USER_EXIST.access_token = ACCESS_TOKEN

      await USER_EXIST.save()

      const RESULT = {
        accessToken: ACCESS_TOKEN,
        id: USER_EXIST.id,
        email: USER_EXIST.email
      }

      return { message: 'Success login', result: RESULT }
    } catch (error) {
      throw error
    }
  }
}
