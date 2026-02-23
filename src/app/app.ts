import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreeceAthens } from './greece-athens/greece-athens';
import { HungaryBudapest } from './hungary-budapest/hungary-budapest';
import { ItalyRome } from './italy-rome/italy-rome';
import { SerbiaSumadija } from './serbia-sumadija/serbia-sumadija';
import { CroatiaPula } from './croatia-pula/croatia-pula';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    GreeceAthens,
    HungaryBudapest,
    ItalyRome,
    SerbiaSumadija,
    CroatiaPula
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('vacation-site');
}
