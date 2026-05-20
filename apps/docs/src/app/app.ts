import { ChangeDetectionStrategy, Component, signal, inject, DOCUMENT } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { ThemeToggleComponent } from './shared/theme-toggle.component';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterModule, ThemeToggleComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly doc = inject(DOCUMENT);

  sidebarOpen = signal(false);
  sidebarCollapsed = signal(
    this.doc.defaultView?.localStorage.getItem('dv-sidebar') === 'collapsed'
  );

  constructor(router: Router) {
    router.events
      .pipe(filter((e) => e instanceof NavigationEnd), takeUntilDestroyed())
      .subscribe(() => this.sidebarOpen.set(false));
  }

  toggleCollapse(): void {
    const next = !this.sidebarCollapsed();
    this.sidebarCollapsed.set(next);
    this.doc.defaultView?.localStorage.setItem('dv-sidebar', next ? 'collapsed' : 'open');
  }
}
