import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-compostos',
  templateUrl: './juros-compostos.component.html',
  styleUrls: ['./juros-compostos.component.css']
})
export class JurosCompostosComponent implements OnInit {
  @Input() capital: string;
  @Input() taxa: string;
  @Input() tempo: string;

  constructor() { }

  ngOnInit() {
  }

  getJurosCompostos(){
    return Number(this.capital) * Math.pow((1 - Number(this.taxa)),Number(this.tempo));
  }
}