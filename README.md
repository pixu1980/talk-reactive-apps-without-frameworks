# Reactive Apps Without Frameworks

Talk deck based on `@pixu-talks/libraries` with the contents of `reactive-apps-without-frameworks`.

## Includes

- based on Signals, Proxies, Tagged Template Literals, DOM Parts, Custom Elements and other modern web APIs
  - no external dependencies, no framework required, just vanilla JavaScript
  - reactive and declarative programming model, with a simple and intuitive API
  - built on top of the web platform, with no abstraction layer, no virtual DOM, no custom rendering engine
  - runtime with `Signal.State`, `Signal.Computed`, `effect`, `model` and `repeat`
- demo TodoList embedded in the deck, with the following features:
  - add, edit, delete and toggle todos
  - filter todos by all, active and completed
  - persist todos in local storage
  - filter todos by text search
  - clear completed todos
  - count of active todos
  - filter todos by priority
  - sort todos by priority and creation date
  - toggle all todos
  - published independently from the deck through the `reactive-apps-without-frameworks-demo` repo
- build with Parcel

## How to run

```bash
pnpm install
pnpm start
```

## External demo embed

The deck reads the demo iframe URL from the `demo-url` query parameter and falls back to the GitHub Pages URL of the standalone demo repo.

Example:

```text
https://pixu1980.github.io/reactive-apps-without-frameworks/?demo-url=https%3A%2F%2Fpixu1980.github.io%2Freactive-apps-without-frameworks-demo%2F
```
