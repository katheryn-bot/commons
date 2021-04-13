import { ConnectionOptions as TypeORMConfig } from 'typeorm';
export interface SecureConfig {
    key: string;
    cert: string;
}
export interface ServerConfig {
    port: number;
    host?: string;
    secure?: SecureConfig;
}
export interface Config {
    docPath: string;
    server: ServerConfig;
    database: TypeORMConfig;
    [constant: string]: any;
}
export declare const get: (path?: string | undefined) => Promise<Config>;
