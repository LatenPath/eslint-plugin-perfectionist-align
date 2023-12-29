# align-assignment (align-assignment)

ESLint rule to enforce alignment of assignment declarations in a group.

## Rule Details

Examples of **incorrect** code for this rule:

```js
const superfoo = 1;
const foo2 = 2;
const fooooooooooooooo = 234;
```

Examples of **correct** code for this rule:

```js
const superfoo         = 1;
const foo2             = 2;
const fooooooooooooooo = 234;
```

### Options

`requiresOnly` (default: false): confirm VariableDeclaration, if `requiresOnly && !hasRequire.test(source)` then `return;`.

## When Not To Use It

If you don't want to align your assignments.
