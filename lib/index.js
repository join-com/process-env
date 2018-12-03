"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processEnv = (envVarName) => {
    const variable = process.env[envVarName];
    if (!variable) {
        throw new Error(`env.${envVarName} is not set`);
    }
    return variable;
};
exports.processEnvInt = (envVarName) => {
    const env = exports.processEnv(envVarName);
    return parseInt(env, 10);
};
//# sourceMappingURL=index.js.map