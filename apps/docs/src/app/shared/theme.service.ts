import { Injectable, signal, effect, inject, DOCUMENT } from '@angular/core';

export type DvTheme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);

  readonly theme = signal<DvTheme>(this.loadSaved());

  constructor() {
    effect(() => {
      const t = this.theme();
      this.doc.body.classList.toggle('dark', t === 'dark');
      localStorage.setItem('dvision-theme', t);
    });
  }

  toggle(): void {
    this.theme.update((t) => (t === 'light' ? 'dark' : 'light'));
  }

  private loadSaved(): DvTheme {
    const saved = localStorage.getItem('dvision-theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
