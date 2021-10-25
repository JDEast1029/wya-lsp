import { platform } from 'os';
import { isAbsolute, resolve } from 'path';
import { URI } from 'vscode-uri';

export function getFileFsPath(documentUri: string): string {
  return URI.parse(documentUri).fsPath;
}

export function getFilePath(documentUri: string): string {
  const IS_WINDOWS = platform() === 'win32';
  if (IS_WINDOWS) {
    return URI.parse(documentUri).path.replace(/^\/[a-zA-Z]/, (s: string) => s.slice(1).toLowerCase());
  } else {
    return URI.parse(documentUri).path;
  }
}

export function normalizeFileNameToFsPath(fileName: string) {
  return URI.file(fileName).fsPath;
}

export function normalizeFileNameResolve(...paths: string[]) {
  return normalizeFileNameToFsPath(resolve(...paths));
}

export function getPathDepth(filePath: string, sep: string) {
  return filePath.split(sep).length;
}

export function getFsPathToUri(fsPath: string) {
  return URI.file(fsPath).toString();
}

export function normalizeAbsolutePath(fsPath: string, root: string) {
  return isAbsolute(fsPath) ? normalizeFileNameToFsPath(fsPath) : normalizeFileNameResolve(root, fsPath);
}
