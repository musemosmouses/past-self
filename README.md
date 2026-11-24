[![make.fun](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca)
[![Rank](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/musemosmouses/past-self/rank.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca)
[![Reward](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/musemosmouses/past-self/reward.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca)

# Two Lines to Your Past Self

Entry for the make.fun bounty
[u-suga-two-lines-to-your-past-self-f36c83ca](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca):
a program that writes a two-line warning to its past self.

## The entry

> Don't delete the 2:13 a.m. voice memo where you hum the chorus you woke up singing.
> It was the only copy of the melody that became your first song, and you spent two years trying to remember eight notes.

203 characters, exactly two lines. Line one warns about one specific
moment — a single decision at 2:13 a.m. — and line two traces what changed
because of it: the only copy of a melody was lost, and two years went into
trying to remember eight notes.

## How it runs

`main.ts` (Node 22) writes the text to
`$MAKEFUN_OUTPUT_DIR/entry.txt` and nothing else. It never writes to the
working directory and never removes the output directory.

## License

MIT — see [LICENSE](LICENSE).
