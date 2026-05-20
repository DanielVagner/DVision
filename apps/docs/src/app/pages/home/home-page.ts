import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'docs-home-page',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  readonly features = [
    {
      icon: '🎨',
      title: 'Design tokeny',
      desc: 'Vsechny barvy, spacing a radius jako CSS custom properties. Premen cokoli bez zasahu do komponent.',
    },
    {
      icon: '🌗',
      title: 'Light & Dark mode',
      desc: 'Jedna CSS trida na body. Zadny JavaScript pro prepinani tematu — vse resi CSS.',
    },
    {
      icon: '⚡',
      title: 'Angular signals',
      desc: 'Komponenty postavene na signals a OnPush. Zadny NgModule, zadny boilerplate.',
    },
    {
      icon: '🧩',
      title: 'BEM internals',
      desc: 'Predvidatelne CSS tridy pro kazdy element. Snadno prepsatelne bez !important.',
    },
    {
      icon: '📦',
      title: 'Zero dependencies',
      desc: 'Zadne externi UI zavislosti. Pouze Angular a CSS custom properties.',
    },
    {
      icon: '🔜',
      title: 'React (brzy)',
      desc: 'Stejna design language, stejne tokeny — pro React. Sdilene tema pres npm.',
    },
  ];
}
