# TypeScript

## What is it?

-   Developed by Microsoft
-   Superset of JavaScript (JavaScript with an extension pack)
-   Compiles to plain JS

## Why use it?

-   Static Type (\*Optional)
-   Complier catches bugs before run-time
-   Imports for you
-   More readable and descriptive code

---

## Definitions

-   **Statically-typed**
    If the type of a variable is known at **compile-time** instead of at run-time, the language is statically-typed
    i.e. Java, C, C++, Scala

---

## Setup

`tsc` <= Runs the TypeScript Complier

`tsc index.ts` <= Runs the TypeScript Complier on the index.ts file,
this coverts the typescript file to a javascript file, index.js

`tscongif.json` <= Used to configure the complier

---

## tsconfig.json:

```json
{
	"compilerOptions": {
		"target": "ESNext",
		"watch": true,
		"lib": ["DOM", "ES2017"]
	}
}
```

-   "target": "esnext", is the version of JavaScript your code will compile to

-   "watch":true, Complies your code every time you save the file, don't have to run tsc index.ts in the terminal every time now

-   "lib":["dom"], allows you to include typing from certain environments, auto complete, integrated documentation, error handling

---

## Notes

-   TypeScript file on its own cannot run the browser, node ect

-   You must compile it first to convert the TypeScript code into vanilla JavaScript

-   By default Typescript will compile to ES3, this version for instance doesn't have support for async functions

---

## Links

[TypeScript Crash Course](https://www.youtube.com/watch?v=rAy_3SIqT-E&list=TLPQMTUwNzIwMjB6zlP1ksMdKQ&index=2)
