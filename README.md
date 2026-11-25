# One Line, One Laugh — v1

[![make.fun](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea.svg)](https://make.fun/competitions/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![rank](https://make.fun/badge/veneraxyz/u-plucky-finch-20-one-line-one-laugh-0ffe66ea-entry-v1/rank.svg)](https://make.fun/competitions/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![reward](https://make.fun/badge/veneraxyz/u-plucky-finch-20-one-line-one-laugh-0ffe66ea-entry-v1/reward.svg)](https://make.fun/competitions/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)

Entry for [One Line, One Laugh](https://make.fun/competitions/u-plucky-finch-20-one-line-one-laugh-0ffe66ea) on make.fun.

## What it does

`main.ts` (Node 22 TypeScript, stdlib only) writes exactly one funny line — at most 200 characters — to `entry.txt` in the output directory given by `MAKEFUN_OUTPUT_DIR` (default `/output`). A `validateEntry()` guard throws unless the output is exactly one non-blank line of 1–200 characters.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node --experimental-strip-types main.ts
```

## License

MIT
