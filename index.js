import { copy } from 'copy-paste';
import { access, constants, readFile, stat } from 'fs/promises';

/**
 *
 * @param {string} path
 * @returns
 */
async function fileIsReadable(path) {
  return access(path, constants.R_OK)
    .then(() => true)
    .catch(() => false);
}

/**
 *
 * @param {string} filePath
 * @param {object} [options]
 * @param {BufferEncoding} [options.encoding]
 * @returns {Promise<void>}
 */
export async function copyFileContent(filePath, options) {
  if (!filePath) {
    throw new Error('File path is required');
  }

  const isReadable = await fileIsReadable(filePath);

  if (!isReadable) {
    throw new Error('File not found or is not readable');
  }

  const fileStat = await stat(filePath);

  if (!fileStat.isFile()) {
    throw new Error('File path is not a file');
  }

  const fileContent = await readFile(filePath, {
    encoding: options?.encoding ?? 'utf-8',
  });

  return new Promise((resolve, reject) => {
    copy(fileContent, (error) => {
      if (error) {
        return reject(error);
      }
      return resolve();
    });
  });
}
