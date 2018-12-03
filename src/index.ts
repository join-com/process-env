export const processEnv = (envVarName: string): string => {
  const variable = process.env[envVarName];
  if (!variable) {
    throw new Error(`env.${envVarName} is not set`);
  }
  return variable;
};

export const processEnvInt = (envVarName: string): number => {
  const env = processEnv(envVarName);
  return parseInt(env, 10);
};
