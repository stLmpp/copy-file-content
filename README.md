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

```
copy-file-content file.html
```
### Using the package as a dependency

Add the package as a dependency
```
pnpm add copy-file-content
```

Then import the function and use it

```typescript
import { copyFileContent } from 'copy-file-content';

await copyFileContent('file.html');
```

## Arguments

| Name       | Type                                                                                                                                           | Required | Default |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------|----------|---------|
| --encoding | [BufferEncoding](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/77f54d70b109a1b9a6ad573202113913ca4e46c6/types/node/buffer.d.ts#L223) | false    | utf-8   |

You can also use the arguments as options in the second arguments of the exported function `copyFileContent`

## Requirements

Node.js version 16 or superior