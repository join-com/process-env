export declare const processEnv: (envVarName: string) => string;
export declare const processEnvInt: (envVarName: string) => number;
export declare const env: (varName: string, optional?: boolean) => {
    asString: () => string;
    asInt: () => number;
    asNumber: () => number;
    asBool: () => boolean;
};
