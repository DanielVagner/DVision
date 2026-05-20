# DVision

[![CI](https://github.com/DanielVagner/DVision/actions/workflows/ci.yml/badge.svg)](https://github.com/DanielVagner/DVision/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/@dvision/angular)](https://www.npmjs.com/package/@dvision/angular)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A modern, themeable component library for Angular — with React support on the roadmap.

Built on CSS custom properties with a clean design language of its own. No Material, no Bootstrap — just a focused set of components that look good, stay consistent, and are easy to customize.

---

## Packages

| Package            | Version                                               | Description                   |
| ------------------ | ----------------------------------------------------- | ----------------------------- |
| `@dvision/angular` | ![npm](https://img.shields.io/npm/v/@dvision/angular) | Angular standalone components |

---

## Features

- **Design tokens via CSS custom properties** — `--dvision-*` prefix, override anything
- **Light & dark mode** — one class on `<body>`, zero JavaScript required for theming
- **BEM component internals** — predictable, overridable class names
- **Angular signals** — built for Angular 17+, `OnPush` by default
- **Standalone components** — no `NgModule`, no boilerplate
- **Zero hardcoded colors** — every color references a token
- **Single import per component** — one constant covers all related directives

---

## Installation

```bash
npm install @dvision/angular
```

---

## Setup

### 1. Import the theme

In your global `styles.scss`:

```scss
@use '@dvision/angular/theme/dvision.theme';
```

### 2. Apply the theme class

In `index.html`, add `class="dvision"` to `<body>`:

```html
<body class="dvision">
  <app-root></app-root>
</body>
```

For **dark mode**, add the `dark` class:

```html
<body class="dvision dark"></body>
```

---

## Usage

### Card

Import a single constant — no need to list every directive individually:

```typescript
import { DV_CARD } from '@dvision/angular';

@Component({
  imports: [DV_CARD],
  template: `
    <dv-card variant="elevated">
      <dv-card-header>
        <h3>Card title</h3>
      </dv-card-header>

      Card body content goes here.

      <dv-card-footer>
        <button>Cancel</button>
        <button>Confirm</button>
      </dv-card-footer>
    </dv-card>
  `
})
```

**Variants:** `elevated` (default) · `filled` · `outlined`

**Slots:**

| Element            | Attribute alternative | Description                          |
| ------------------ | --------------------- | ------------------------------------ |
| `<dv-card-media>`  | `dvCardMedia`         | Image or video — always flush to top |
| `<dv-card-header>` | `dvCardHeader`        | Header section below media           |
| `<dv-card-footer>` | `dvCardFooter`        | Footer with actions                  |

Both syntaxes work — element form is recommended:

```html
<!-- Element syntax (recommended) -->
<dv-card>
  <dv-card-header><h3>Title</h3></dv-card-header>
  Body content
</dv-card>

<!-- Attribute syntax (also supported) -->
<dv-card>
  <div dvCardHeader><h3>Title</h3></div>
  Body content
</dv-card>
```

---

## Theming

All colors, spacing, radius and shadow values are exposed as CSS custom properties. Override them globally or scoped to a selector:

```css
.dvision {
  --dvision-primary: #1d6feb;
  --dvision-secondary: #0694a2;
  --dvision-accent: #f5c518;

  --dvision-radius-md: 10px;
  --dvision-shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
}
```

Full token reference is available in the [documentation](#documentation).

---

## Documentation

Run the docs app locally:

```bash
npm run docs
```

Then open [http://localhost:4200](http://localhost:4200).

---

## Development

This is an [Nx](https://nx.dev) monorepo.

```bash
# Serve the docs app
npm run docs

# Build the Angular library
npm run build:lib

# Build everything
npm run build:all

# Run tests
npm test

# Lint
npm run lint
```

---

## Roadmap

- [x] Card component
- [x] Design tokens + theming
- [x] Light / dark mode
- [x] Single import constant (`DV_CARD`)
- [x] Element slot syntax (`<dv-card-header>`)
- [ ] Button
- [ ] Input
- [ ] Badge
- [ ] Modal / Dialog
- [ ] Tooltip
- [ ] `@dvision/react` package

---

## License

MIT
