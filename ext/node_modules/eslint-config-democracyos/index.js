module.exports = {
  "parser": "babel-eslint",

  "extends": ["standard", "standard-react", "plugin:node/recommended"],

  "plugins": ["import", "promise", "babel", "node"],

  "rules": {
    "arrow-parens": [
      "error",
      "always"
    ],
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ]
      }
    ],
    "curly": [
      "error",
      "multi-line",
      "consistent"
    ],
    "import/no-extraneous-dependencies": 0,
    "import/no-unassigned-import": 0,
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "node/exports-style": 0,
    "node/no-unsupported-features": 0,
    "react/prop-types": 0,
    "react/jsx-closing-bracket-location": [
      "error",
      {
        "selfClosing": "after-props",
        "nonEmpty": "after-props"
      }
    ],
    "react/jsx-space-before-closing": [
      "error",
      "always"
    ],
    "promise/catch-or-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "warn"
  }
}
