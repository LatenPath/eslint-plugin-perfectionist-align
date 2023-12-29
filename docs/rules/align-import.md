# Align import statements (align-import)

This rules is the response for this [SO Question](https://stackoverflow.com/questions/59935918/eslint-indent-import-export-statements).
It'll align all import-statements in the same "block".

## Rule Details

This rule aims to improve the readability of import statements.

Examples of **incorrect** code for this rule:

```js
import { CheckBox, InputField } from "@components";
import { users, posts } from "@store";
import { createClassName } from "../utils/className";
import { on, off } from "../utils/events";
```

```js
import { CheckBox, InputField } from "@components";
import { users, posts } from "@store";
import { createClassName } from "../utils/className";

// Too much space between import and from part
import { on, off } from "../utils/events";
import * as styles from "../styles/core";
```

Examples of **correct** code for this rule:

```js
import { CheckBox, InputField } from "@components";
import { users, posts } from "@store";
import { createClassName } from "../utils/className";
import { on, off } from "../utils/events";
import * as styles from "../styles/core";
```

```js
import { CheckBox, InputField } from "@components";
import { users, posts } from "@store";
import { createClassName } from "../utils/className";

import { on, off } from "../utils/events";
import * as styles from "../styles/core";
```

### Options

`This rule has no optional setting`

## When Not To Use It

If you don't want to align your import statements.
