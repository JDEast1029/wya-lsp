export const isDefined = <T>(obj: T | undefined): obj is T => {
	return typeof obj !== 'undefined';
};