import * as fs from 'fs'
import { join } from 'path'
import { load } from 'js-yaml'
import { ConnectionOptions as TypeORMConfig } from 'typeorm'

export interface SecureConfig {
  key: string
  cert: string
}

export interface ServerConfig {
  port: number
  host?: string
  secure?: SecureConfig
}

export interface Config {
  docPath: string
  server: ServerConfig
  database: TypeORMConfig
  [constant: string]: any
}

const isValidPort = (port: number): boolean => {
  return port !== 6000 && !isNaN(port)
}

export const loadConfig = (path?: string): Config => {
  const config = {}

  const configPath = path === undefined
    ? join(process.cwd(), 'config/default.yml')
    : path
  console.log(configPath)

  fs.readFile(configPath, (error, contents) => {
    if (error) {
      throw new Error(error.message)
    } else {
      const newConfig = load(contents.toString()) as Config
      const { server } = newConfig

      if (!isValidPort(server.port)) {
        throw new Error('Invalid server port.')
      }

      Object.assign(config, newConfig)
    }
  })

  return config as Config
}
