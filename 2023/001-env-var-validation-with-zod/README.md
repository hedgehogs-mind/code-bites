# 001 – Env variables type safe and validated with zod 💎

# Table of contents

<!-- TOC -->
* [001 – Env variables type safe and validated with zod 💎](#001--env-variables-type-safe-and-validated-with-zod-)
* [Table of contents](#table-of-contents)
* [🎭 Protagonist](#-protagonist)
* [🤓 TL;DR](#-tldr)
  * [What to do](#what-to-do)
  * [Benefits](#benefits)
  * [🧸 Nice to haves](#-nice-to-haves)
* [💻 Example application](#-example-application)
  * [🛠 Tools](#-tools)
  * [🚀 Run the example](#-run-the-example)
* [📘 LinkedIn post assets](#-linkedin-post-assets)
<!-- TOC -->

# 🎭 Protagonist

It's the TypeScript library [Zod 💎 🔗](https://github.com/colinhacks/zod).

# 🤓 TL;DR 

## What to do
1. Create a central place like `env.ts`.
2. Create a Zod schema that represents your env variables.
3. Make use of Zod's `coerce` feature to parse strings as numbers.
4. Parse `process.env` with your schema and export the result as a `const`.
5. Consume your env vars only via the exported object!

## Benefits

- ✅ Validated env vars – make use even of complex constraints!
- ✅ Typed access to env vars!
- ✅ Centralized env var handling.

## 🧸 Nice to haves

- Use `safeParse`, evaluate the result and print custom error messages.
- Split the schema to separate env vars logically. 

# 💻 Example application

## 🛠 Tools

- Node.js
- TypeScript
- Zod 💎
- Express

## 🚀 Run the example

With npm:
```bash
npm install
npm run dev
```

With yarn:
```bash
yarn
yarn dev
```

___

Make API request **without** the API key:
```bash
curl --location --request GET 'http://localhost:5000/'
```

❌ You should get: `401: No or wrong API key.`

___

Make API request **with** the API key:
```bash
curl --location --request GET 'http://localhost:5000/' \
--header 'X-api-key: k@2XjBQZ6uNX'
```

✅ You should get: `200: Zod is awesome! 💎`

# 📘 LinkedIn post assets

[Here you go ➡️](LinkedIn)