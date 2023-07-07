import { readFile, writeFile } from 'fs/promises';

const packageJSON = await readFile('package.json', 'utf-8').then((content) =>
  JSON.parse(content),
);

await writeFile(
  'bin/version.js',
  `export const VERSION = '${packageJSON.version}';`,
);
