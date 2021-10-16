import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() avatar!: string;
@Input() titulo!: string;
@Input() conteudo!: string;
@Input() link!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
