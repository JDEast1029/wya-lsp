import { findConfigFile as tsFindConfigFile, sys } from 'typescript';

export const findConfigFile = (findPath: string, configName: string) => {
	return tsFindConfigFile(findPath, sys.fileExists, configName);
};

export const requireUncached = (module: string) => {
	delete require.cache[require.resolve(module)];
	return require(module);
};
