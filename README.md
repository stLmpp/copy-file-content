# copy-file-content

<a href="https://www.npmjs.com/package/copy-file-content"><img src="https://img.shields.io/npm/v/copy-file-content.svg" alt="Latest Stable Version"></a>
<a href="https://www.npmjs.com/package/copy-file-content"><img src="https://img.shields.io/npm/dw/copy-file-content.svg" alt="Total Downloads"></a>

Very simple package to copy the file content to your clipboard

## Motivation

I was tired of opening text files to copy their content, so I created this package.

## Usage

There's 2 ways of using

### Using the package globally as a command tool

First install the package globally
```shell
pnpm add copy-file-content -g
```

Then you can use it to the file content

```shell
copy-file-content file.html
```
After this, the file content will be avaiable in the clipboard
### Using the package as a dependency

Add the package as a dependency
```shell
pnpm add copy-file-content
```

Then import the function and use it

```typescript
import { copyFileContent } from 'copy-file-content';

await copyFileContent('file.html');
```
After this, the file content will be avaiable in the clipboard

## Arguments

| Name       | Type                                                                                                                                           | Required | Default |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------|----------|---------|
| --encoding | [BufferEncoding](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/77f54d70b109a1b9a6ad573202113913ca4e46c6/types/node/buffer.d.ts#L223) | false    | utf-8   |

You can also use the arguments as options in the second argument of the exported function `copyFileContent`, like this:

```typescript
import { copyFileContent } from 'copy-file-content';

await copyFileContent('file.html', { encoding: 'utf-16' });
```

## Requirements

Node.js version 16 or superior

## Notes

- This package only works in a Node.js environments, it was not tested in the browser
- This package is ESM only, it was not tested with CommonJS
- This package only works with text files. It will not copy the content of a .xlsx, for example
- This package does not validate how big the file is, I made it to be used with small files