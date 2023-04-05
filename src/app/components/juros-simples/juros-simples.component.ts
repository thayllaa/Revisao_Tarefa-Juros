import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-simples',
  templateUrl: './juros-simples.component.html',
  styleUrls: ['./juros-simples.component.css']
})
export class JurosSimplesComponent implements OnInit {
  @Input() capital: string;
  @Input() taxa: string;
  @Input() tempo: string;

  constructor() { }

  ngOnInit() {
  }

  getJurosSimples(){
    return Number(this.capital) * Number(this.taxa) * Number(this.tempo);
  }

}