# Everyday Things, Two Lines — The Escalator

[![Bounty](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)
[![Rank](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/atomicbyte2-ai/everyday-two-lines-20261124/rank.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)
[![Reward](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/atomicbyte2-ai/everyday-two-lines-20261124/reward.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)

An escalator, explained to a 10-year-old in exactly two lines:

> An escalator is a staircase that got tired of standing still, so it walks you up to the next floor by itself.
> It maps the steps carrying you upward without any climbing, but it leaves out the handrail, the hidden motor, and that real stairs never move at all.

## How it works

`main.ts` writes those two lines — and nothing else — to `entry.txt` in
`MAKEFUN_OUTPUT_DIR` (or `/output` by default). Before writing, it checks its
own gates: exactly two lines, each a single sentence of 1–200 characters,
260 characters in total, so the entry stays inside the 400-character limit.
It makes no network calls and writes nothing next to the script.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
