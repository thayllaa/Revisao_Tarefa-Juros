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
  jurosOpcao: string = 'composto';

  getJurosCompostos() {
    const montante = this.capital * Math.pow(1 + this.taxa / 100, this.tempo);
    return montante.toFixed(2);
  }

  closeCalculator(event: Event) {
    event.stopPropagation();
    this.cardClass = 'hidden';
    this.showCalculator = false;

    const radioSelecionado = document.querySelector(
      'input[type="radio"]:checked'
    ) as HTMLInputElement;
    if (radioSelecionado) {
      this.jurosOpcao = radioSelecionado.value as 'simples' | 'composto';
    } else {
      this.jurosOpcao = '';
    }

    const radioSimples: HTMLInputElement = document.querySelector(
      'input[type="radio"][value="simples"]'
    );
    if (radioSimples) {
      radioSimples.checked = false;
    }
    const radioComposto: HTMLInputElement = document.querySelector(
      'input[type="radio"][value="composto"]'
    );
    if (radioComposto) {
      radioComposto.checked = false;
    }
  }
}
