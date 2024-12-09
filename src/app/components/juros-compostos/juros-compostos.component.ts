import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-juros-compostos',
  templateUrl: './juros-compostos.component.html',
  styleUrls: ['./juros-compostos.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [style({ opacity: 0 }), animate(300)]),
    ]),
  ],
})
export class JurosCompostosComponent {
  cardClass: string = '';
  showCalculator = true;

  capital = 0;
  taxa = 0;
  tempo = 0;

  getJurosCompostos() {
    const montante = this.capital * Math.pow(1 + this.taxa / 100, this.tempo);
    return montante.toFixed(2);
  }

  closeCalculator(event: Event) {
    event.stopPropagation();
    this.cardClass = 'hidden';
    this.showCalculator = false;
  }
}
