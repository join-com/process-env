"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = exports.processEnvInt = exports.processEnv = void 0;
exports.processEnv = (envVarName) => {
    const variable = process.env[envVarName];
    if (!variable) {
        throw new Error(`env.${envVarName} is not set`);
    }
    return variable;
};
exports.processEnvInt = (envVarName) => {
    const variable = exports.processEnv(envVarName);
    return parseInt(variable, 10);
};
const asInt = (str, varName) => {
    if (!str) {
        return 0;
    }
    const num = parseInt(str, 10);
    if (Number.isNaN(num)) {
        throw new Error(`env.${varName} is expected to be number`);
    }
    return num;
};
const asNumber = (str, varName) => {
    if (!str) {
        return 0;
    }
    const num = parseFloat(str);
    if (Number.isNaN(num)) {
        throw new Error(`env.${varName} is expected to be number`);
    }
    return num;
};
const asBool = (str, varName) => {
    if (!str) {
        return false;
    }
    if (str !== 'true' && str !== 'false') {
        throw new Error(`env.${varName} is expected to be either "true" or "false"`);
    }
    return str === 'true';
};
exports.env = (varName, optional = false) => {
    const variable = process.env[varName];
    if (!variable && !optional) {
        throw new Error(`env.${varName} is not set`);
    }
    return {
        asString: () => variable || '',
        asInt: () => asInt(variable, varName),
        asNumber: () => asNumber(variable, varName),
        asBool: () => asBool(variable, varName),
    };
};
//# sourceMappingURL=index.js.map