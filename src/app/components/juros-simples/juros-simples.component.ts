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

  constructor() {}

  ngOnInit() {}

  getJurosSimples() {
    const juros = this.capital * this.taxa * this.tempo;
    return juros.toFixed(2);
  }

  closeCalculator(event: Event) {
    event.stopPropagation();
    this.showCalculator = false;
  }
}
