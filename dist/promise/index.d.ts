declare global  {
    interface PromiseConstructor {
        ready<T>(): {
            go: (value?: T) => void;
            error: (reason?: T) => void;
            shouldWait: Promise<T>;
        };
    }
}
export declare function ready<T extends any>(): {
    go: (value?: T) => void;
    error: (reason?: T) => void;
    shouldWait: Promise<T>;
};
export default function install(): void;
