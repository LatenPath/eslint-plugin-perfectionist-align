# ESLint Plugin Perfectionist Align

`This README.md inspired by eslint-plugin-perfectionist` [repo](https://github.com/azat-io/eslint-plugin-perfectionist).

ESLint plugin that sets rules to format your code and make it consistent.

This plugin defines rules for align imports, assignments, etc.

All rules are automatically fixable. It's safe!

## 📖 What is this?

This plugin / rule will align:

> from

```js
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export2 as alias1 } from "module-name";
import { export3, export4 } from "module-name";
import { foo, bar } from "module-name/path/to/specific/un-exported/file";
import { export5, export6 as alias7 } from "module-name";
import defaultExport2, { export8 } from "module-name";
import defaultExport3, * as name2 from "module-name";

// Align assignments
const foo = 1;
const foo100 = 2;
const foo1000000 = 234;

```

> to

```js
import defaultExport                   from "module-name";
import * as name                       from "module-name";
import { export1 }                     from "module-name";
import { export2 as alias1 }           from "module-name";
import { export3 , export4 }           from "module-name";
import { foo , bar }                   from "module-name/path/to/specific/un-exported/file";
import { export5 , export6 as alias7 } from "module-name";
import defaultExport2, { export8 }     from "module-name";
import defaultExport3, * as name2      from "module-name";

// Align assignments
const foo        = 1;
const foo100     = 2;
const foo1000000 = 234;
```

## 💿 Installation

You'll first need to install [ESLint](https://eslint.org):

```sh
npm install --save-dev eslint
```

Next, install `eslint-plugin-perfectionist-align`:

```sh
npm install --save-dev eslint-plugin-perfectionist-align
```

## 🚀️️️️ Usage

Add `eslint-plugin-perfectionist-align` to the plugins section of the ESLint configuration file and define the list of rules you will use.

### Legacy Config ([`.eslintrc`](https://eslint.org/docs/latest/use/configure/configuration-files))

<!-- prettier-ignore -->
```json
{
  "plugins": [
    "perfectionist-align"
  ],
  "rules": {
    "perfectionist-align/align-import": ["warn"]
}
```

### Flat Config ([`eslint.config.js`](https://eslint.org/docs/latest/use/configure/configuration-files-new)) (requires eslint >= v8.23.0)

Read more about [migration](https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-configs) and setup your `eslint.config.js`:

```js
// For ES6 import, read migration link
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...compat.config({
    plugins: ["perfectionist-align"],
    rules: {
      "perfectionist-align/align-import": [1],
    },
  }),
];
```

## ⚙️ Configs

The easiest way to use `eslint-plugin-perfectionist-align` is to use ready-made configs. Config files use all the rules of the current plugin, but you can override them.

### Legacy Config ([`.eslintrc`](https://eslint.org/docs/latest/use/configure/configuration-files))

<!-- prettier-ignore -->
```json
{
  "extends": [
    "plugin:perfectionist-align/recommended"
  ]
}
```

### Flat Config ([`eslint.config.js`](https://eslint.org/docs/latest/use/configure/configuration-files-new))

<!-- prettier-ignore -->
```js
// For ES6 import, read migration link
const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory : __dirname,
});

module.exports = [
    ...compat.config({
        extends : [
       'plugin:perfectionist-align/recommended'
    ]
    })
];
```

### List of Configs

| Name                                                                                                           | Description                         |
| :------------------------------------------------------------------------------------------------------------- | :---------------------------------- |
| [recommended](https://github.com/LatenPath/eslint-plugin-perfectionist-align/blob/main/configs/recommended.js) | all plugin rules with warning level |

## ✅ Rules

<!-- begin auto-generated rules list -->

🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                                                                                                | Description                                                                                                                                                     | 🔧  |
| :------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-- |
| [align-import](https://github.com/LatenPath/eslint-plugin-perfectionist-align/blob/main/docs/rules/align-import.md) | `author` [simonwep repo](https://github.com/simonwep/eslint-plugin-align-import) - Aligns your import statements. | 🔧  |
| [align-assignment](https://github.com/LatenPath/eslint-plugin-perfectionist-align/blob/main/docs/rules/align-assignment.md) | `author` [lucasefe](https://github.com/lucasefe/eslint-plugin-align-assignments) - Alignment of assignment declarations in a group. | 🔧  |

<!-- end auto-generated rules list -->

## ⁉️ FAQ

### Can I automatically fix problems in the editor?

Yes. To do this, you need to enable autofix in ESLint when you save the file in your editor.

To disable autofix, i recommend [no-autofix plugin](https://www.npmjs.com/package/eslint-plugin-no-autofix?activeTab=readme).

## ⚠️ Troubleshooting

There are rules of ESLint and other ESLint plugins that may conflict with the rules of ESLint Plugin Perfectionist Align. We strongly recommend that you [disable rules](https://eslint.org/docs/latest/use/configure/rules#using-configuration-files-1) with similar functionality.

<details>
  <summary>Possible conflicts</summary>

</details>

## 🚥 Versioning Policy

This plugin is following [Semantic Versioning](https://semver.org/) and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

## ❤️ Contributing

See [Contributing Guide](https://github.com/LatenPath/eslint-plugin-perfectionist-align/blob/main/CONTRIBUTING.md).

## 👁 See Also

- [`eslint-plugin-perfectionist`](https://github.com/azat-io/eslint-plugin-perfectionist) - sort everything!
- [`eslint-plugin-align-import`](https://github.com/simonwep/eslint-plugin-align-import) - author `align-import` rule
- [`eslint-plugin-align-assignments`](https://github.com/lucasefe/eslint-plugin-align-assignments) - author `align-assignment` rule

- [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc) - this plugin support JSdoc alignment

- Align objects, arrays, and function parameters:
- `no-multi-spaces`, `indent`,... [`eslint builtin rule`](https://github.com/LatenPath/eslint-plugin-perfectionist-align/blob/main/eslint.config.js).

## 🔒 License

MIT &copy; [Laten Path](https://github.com/LatenPath/eslint-plugin-perfectionist-align/blob/main/LICENSE)
