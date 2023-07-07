#!/usr/bin/env node
import arg from 'arg';
import { copyFileContent } from '../index.js';
import { VERSION } from './version.js';

const argOptions = {
  '--version': Boolean,
  '--encoding': String,
  '--help': Boolean,
};

const args = arg(argOptions);

if (args['--version']) {
  console.log(`copy-file-content version: ${VERSION}`);
  process.exit(0);
}

if (args['--help']) {
  /**
   * @type {Record<keyof typeof argOptions, { Description: string; Example: string; }>}
   */
  const options = {
    '--version': {
      Description: 'Display version of the package',
      Example: 'copy-file-content --version',
    },
    '--encoding': {
      Description: 'Encoding used to read the file content',
      Example: 'copy-file-content --encoding utf-16',
    },
    '--help': {
      Description: 'Show this menu',
      Example: 'copy-file-content --help',
    },
  };
  console.log(`
copy-file-content v${VERSION}

Usage example: copy-file-content ./my-file.json

Options:`);
  console.table(
    Object.keys(argOptions).map((arg) => ({
      Name: arg,
      ...(options[arg] ?? {}),
    })),
    ['Name', 'Description', 'Example'],
  );
  process.exit(0);
}

const filePath = args._[0];

await copyFileContent(filePath, {
  encoding: args['--encoding'],
});
