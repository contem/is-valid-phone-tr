# 📱 is-valid-phone-tr

Validate Turkish mobile phone numbers with ease.

This package checks whether a given string is a valid Turkish GSM number. Supports common formats like `+90`, `05`, or just `5`.

---

## 📦 Installation

### Using npm

```bash
npm install is-valid-phone-tr
```

### Using yarn

```bash
yarn add is-valid-phone-tr
```

---

## 🚀 Usage

```js
const isValidPhone = require("is-valid-phone-tr");

console.log(isValidPhone("05551234567"));     // true
console.log(isValidPhone("+905551234567"));   // true
console.log(isValidPhone("5551234567"));      // true
console.log(isValidPhone("123456"));          // false
```

---

## ⚙️ Options

There are no configuration options.

| Format Supported    | Example         |
|---------------------|-----------------|
| With country code   | `+905551234567` |
| With zero prefix    | `05551234567`   |
| Without prefix      | `5551234567`    |
| With spaces/dashes  | `0555 123 45 67` / `0555-123-4567` |

---

## 🧾 How It Works

It uses a regular expression to validate Turkish GSM numbers (`5xx` area codes) and allows optional country prefix (`+90`, `0`).

---

## 🧪 Run Test

```bash
node test.js
```

---

## 🪪 License

```
MIT
```
