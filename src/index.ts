export const processEnv = (envVarName: string): string => {
  const variable = process.env[envVarName];
  if (!variable) {
    throw new Error(`env.${envVarName} is not set`);
  }
  return variable;
};

export const processEnvInt = (envVarName: string): number => {
  const variable = processEnv(envVarName);
  return parseInt(variable, 10);
};

const asInt = (str: string | undefined, varName: string): number => {
  if (!str) {
    return 0;
  }
  const num = parseInt(str, 10);
  if (Number.isNaN(num)) {
    throw new Error(`env.${varName} is expected to be number`);
  }
  return num;
};

const asNumber = (str: string | undefined, varName: string): number => {
  if (!str) {
    return 0;
  }
  const num = parseFloat(str);
  if (Number.isNaN(num)) {
    throw new Error(`env.${varName} is expected to be number`);
  }
  return num;
};

const asBool = (str: string | undefined, varName: string): boolean => {
  if (!str) {
    return false;
  }
  if (str !== 'true' && str !== 'false') {
    throw new Error(
      `env.${varName} is expected to be either "true" or "false"`,
    );
  }
  return str === 'true';
};

/**
 * Parses a string of key=value pairs separated by commas into an object
 */
const asKeyValuePairs = (
  str: string | undefined,
  varName: string,
): { [key: string]: string } => {
  if (!str) {
    return {};
  }
  return str.split(',').reduce<{ [key: string]: string }>((acc, pair) => {
    const [key, value] = pair.split('=');
    if (!key || !value) {
      throw new Error(`Invalid key=value pair in env.${varName}: ${pair}`);
    }
    acc[key] = value;
    return acc;
  }, {});
};

export const env = (varName: string, optional = false) => {
  const variable = process.env[varName];
  if (!variable && !optional) {
    throw new Error(`env.${varName} is not set`);
  }
  return {
    asString: () => variable || '',
    asInt: () => asInt(variable, varName),
    asNumber: () => asNumber(variable, varName),
    asBool: () => asBool(variable, varName),
    asKeyValuePairs: () => asKeyValuePairs(variable, varName),
  };
};
