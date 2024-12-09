import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  option: 'simples' | 'composto';
  name = 'Escolha o cálculo desejado:';
  jurosOpcao: 'simples' | 'composto';
}
