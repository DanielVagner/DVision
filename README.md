# DVision

A modern, themeable component library for Angular — with React support on the roadmap.

Built on CSS custom properties with a clean design language of its own. No Material, no Bootstrap — just a focused set of components that look good, stay consistent, and are easy to customize.

---

## Packages

| Package | Version | Description |
|---|---|---|
| `@dvision/angular` | ![npm](https://img.shields.io/npm/v/@dvision/angular) | Angular standalone components |

---

## Features

- **Design tokens via CSS custom properties** — `--dvision-*` prefix, override anything
- **Light & dark mode** — one class on `<body>`, zero JavaScript required for theming
- **BEM component internals** — predictable, overridable class names
- **Angular signals** — built for Angular 17+, `OnPush` by default
- **Standalone components** — no `NgModule`, no boilerplate
- **Zero hardcoded colors** — every color references a token

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
@use '@dvision/angular/src/theme/dvision.theme';
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
<body class="dvision dark">
```

---

## Usage

### Card

```typescript
import {
  DvCardComponent,
  DvCardHeaderDirective,
  DvCardFooterDirective,
  DvCardMediaDirective
} from '@dvision/angular';

@Component({
  imports: [DvCardComponent, DvCardHeaderDirective, DvCardFooterDirective, DvCardMediaDirective],
  template: `
    <dv-card variant="elevated">
      <img dvCardMedia src="..." alt="..." />
      <div dvCardHeader>Card title</div>
      Card body content goes here.
      <div dvCardFooter>Footer</div>
    </dv-card>
  `
})
```

**Variants:** `elevated` (default) · `filled` · `outlined`

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
```

---

## Roadmap

- [x] Card component
- [x] Design tokens + theming
- [x] Light / dark mode
- [ ] Button
- [ ] Input
- [ ] Badge
- [ ] Modal / Dialog
- [ ] Tooltip
- [ ] `@dvision/react` package

---

## License

MIT
