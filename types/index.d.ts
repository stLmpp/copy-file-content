/**
 *
 * @param {string} filePath
 * @param {object} [options]
 * @param {BufferEncoding} [options.encoding]
 * @returns {Promise<void>}
 */
export function copyFileContent(filePath: string, options?: {
    encoding?: BufferEncoding | undefined;
} | undefined): Promise<void>;
