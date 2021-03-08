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
  docPath: string
  server: ServerConfig
  database: TypeORMConfig
  [constant: string]: any
}

const isValidPort = (port: number): boolean => {
  return port !== 6000 && !isNaN(port)
}

export const loadConfig = async (path?: string): Promise<Config> => {
  const configPath = path === undefined
    ? join(process.cwd(), 'config/default.yml')
    : path

  const contents = await readFile(configPath)

  const config = load(contents.toString()) as Config
  const { server, database } = config

  if (!isValidPort(server.port) || !isValidPort(database.port)) {
    throw new Error('The server/database port is invalid.')
  }

  return config
}
