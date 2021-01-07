export interface InstanceConstructor {
    url: string;
    path: string | '/';
}
export declare const getQuery: ({ url, path, }: InstanceConstructor) => Promise<void>;
export declare const getPuppet: ({ url, path, }: InstanceConstructor) => Promise<void>;
