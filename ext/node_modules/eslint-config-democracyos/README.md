# DemocracyOS' ESLint Shareable Config

An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) featuring Standard React and some other goodies.

Using this config you won't need to install any other dependencies/plugins, and you will profit from eslint, react, imports, etc...

## Usage

```bash
npm install --save-dev eslint eslint-config-democracyos
```

And, in your `.eslintrc`:
```JSON
{
  "extends": ["democracyos"]
}
```

## Rules Included

* [Standard](http://standardjs.com/rules) rules.
* [Standard React](https://github.com/feross/eslint-config-standard-react) rules.
* [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)
  * With the [default configuration](https://github.com/mysticatea/eslint-plugin-node#bulb-rules).
* [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
  * Enforce a convention in module import order ([docs](https://github.com/benmosher/eslint-plugin-import/docs/rules/order.md)).
  * Forbid the use of extraneous packages ([docs](https://github.com/benmosher/eslint-plugin-import/docs/rules/no-extraneous-dependencies.md)).
  * Forbid unassigned imports ([docs](https://github.com/benmosher/eslint-plugin-import/docs/rules/no-unassigned-import.md)).
* [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
  * Enforces the use of `catch` on un-returned promises.
  * Avoid wrapping values in `Promise.resolve` or `Promise.reject` when not needed.
  * Enforce consistent param names when creating new promises.
  * Avoid nested `.then()` or `.catch()` statements.
* Eslint Rules:
  * Require parens in arrow function arguments ([arrow-parens](http://eslint.org/docs/rules/arrow-parens)).
  * Require curly braces `{}` on multi-line blocks ([curly#multi-line](http://eslint.org/docs/rules/curly#multi-line)).
  * Require spaces between braces ([object-curly-spacing#always](http://eslint.org/docs/rules/object-curly-spacing#always)).
* React Rules:
  * Enforce the closing bracket location for JSX multiline elements ([jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)).
  * Validate spacing before closing bracket in JSX ([jsx-space-before-closing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md)).

## Atom Usage

Just install:

* [linter](https://atom.io/packages/linter)
* [linter-eslint](https://atom.io/packages/linter-eslint)
