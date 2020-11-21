import { join } from 'path'
import { load } from 'js-yaml'
import { readFile } from 'fs/promises'

export interface SecureConfig {
  key: string
  cert: string
}

export interface ServerConfig {
  port: number
  host?: string
  secure?: SecureConfig
}

export interface TypeORMConfig {
  port: number
  type: 'postgres'
  database: string
  username: string
  password: string
  entities: string[]
  migrations: string[]
  subscribers?: string[]
  host: string | '127.0.0.1'
}

export interface Config {
  server: ServerConfig
  database: TypeORMConfig
  [constant: string]: any
}

export const get = async (path?: string): Promise<Config> => {
  const configPath = path !== undefined
    ? path
    : join(process.cwd(), 'config/default.yml')

  console.log(configPath)

  const contents = await readFile(configPath)

  return load(contents.toString()) as Config
}
