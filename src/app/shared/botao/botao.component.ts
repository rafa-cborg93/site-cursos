import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {
  @Input() btn_icon!: string;
  @Input() btn_label!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
