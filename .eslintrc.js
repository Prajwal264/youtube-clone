module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb"
  ],
  "setting": {
    "react": {
      "version": "detect"
    }
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugin": [
    "react"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off"
  }
}