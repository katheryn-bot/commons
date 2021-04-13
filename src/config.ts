import { join } from 'path'
import { load } from 'js-yaml'
import * as fs from 'fs/promises'
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

export const get = async (path?: string): Promise<Config> => {
  if (!path) path = join(process.cwd(), '/config/default.yml')
  const contents = await fs.readFile(path)

  return load(String(contents)) as Config
}
