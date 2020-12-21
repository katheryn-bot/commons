import TransportStream from 'winston-transport';
declare type Callback = () => void;
interface LoggerFormat {
    timestamp: string;
    message: string;
    level: string;
}
export declare class ConsoleLogger extends TransportStream {
    log(info: LoggerFormat, callback: Callback): void;
    private logMessage;
    private formatMsg;
}
export declare class FileLogger extends TransportStream {
}
export {};
