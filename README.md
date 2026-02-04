# UI Primitives Demo

This repository demonstrates how to share UI primitives across apps by swapping a
surface context instead of recreating components to extend styles. The example
shows a single Button primitive whose variants are defined with
class-variance-authority (CVA) and Tailwind, while a `UISurfaceProvider` toggles
between user/admin surfaces to change the base styling.

## Why this demo exists

- Keep one component implementation while apps provide their own surface styles.
- Avoid cloning components just to tweak styles in different apps.
- Centralize variants in CVA and Tailwind so styling stays consistent and easy
  to extend.

## Run locally

```bash
npm install
npm run dev
```

## Live demo

Try it instantly on StackBlitz:
[https://stackblitz.com/~/github.com/RobertoVillegas/ui-primitives-demo](https://stackblitz.com/~/github.com/RobertoVillegas/ui-primitives-demo)
