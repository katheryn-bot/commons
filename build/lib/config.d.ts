export interface SecureConfig {
    key: string;
    cert: string;
}
export interface ServerConfig {
    port: number;
    host?: string;
    secure?: SecureConfig;
}
export interface TypeORMConfig {
    port: number;
    type: 'postgres';
    database: string;
    username: string;
    password: string;
    entities: string[];
    migrations: string[];
    subscribers?: string[];
    host: string | '127.0.0.1';
}
export interface Config {
    server: ServerConfig;
    database: TypeORMConfig;
    [constant: string]: any;
}
export declare const get: (path?: string | undefined) => Promise<Config>;
