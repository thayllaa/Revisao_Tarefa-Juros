import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-simples',
  templateUrl: './juros-simples.component.html',
  styleUrls: ['./juros-simples.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [style({ opacity: 0 }), animate(300)]),
    ]),
  ],
})
export class JurosSimplesComponent implements OnInit {
  cardClass: string = '';
  showCalculator = true;

  @Input() capital: number;
  @Input() taxa: number;
  @Input() tempo: number;
  jurosOpcao: string = 'simples';

  constructor() {}

  ngOnInit() {}

  getJurosSimples() {
    const juros = this.capital * this.taxa * this.tempo;
    return juros.toFixed(2);
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
