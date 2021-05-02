# 0001, Rushstack used as tool family

Date: 2021-04-11

## Context

Projects need a standard build tool chain. Developer experience and repeatability are important considerations when selecting a build tool chain.

[Rushstack](https://rushstack.io/) provides [Heft](https://rushstack.io/pages/heft_tutorials/getting_started/) and [`ts-command-line`](https://www.npmjs.com/package/@rushstack/ts-command-line) in its tool family.

## Decision

Rushstack will be used as our standard "build stack".

[Heft](https://rushstack.io/pages/heft_tutorials/getting_started/) was chosen as `ftrucli`'s build tool, since it is the standard choice of the author.

[`ts-command-line`](https://www.npmjs.com/package/@rushstack/ts-command-line) was chosen as our command line builder.

## Status

Accepted.

## Consequences

We will be using the [Rushstack](https://rushstack.io/) family of tools, including the [`@rushstack/ts-command-line`](https://www.npmjs.com/package/@rushstack/ts-command-line) command-line framework.
