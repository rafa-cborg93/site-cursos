import { Component, Input, OnInit } from '@angular/core';

// export interface Cursos {
//   name: string
// }
@Component({
  selector: 'app-card-formacoes',
  templateUrl: './card-formacoes.component.html',
  styleUrls: ['./card-formacoes.component.scss']
})

export class CardFormacoesComponent implements OnInit {
@Input() backgroundColor!: string;
@Input() borderLeft !: string;
@Input() tituloCurso !: string;
@Input() ngFor!: string;
@Input() leftWidth!: string;
@Input() rightWidth!: string;
@Input() link !:string;

 cursosProgramacao = [
  {
    name:'Java EE'
  },
  {
    name:'C/C++'
  },
  {
    name:'Javascript'
  },
  {
    name:'PHP'
  },
]
 cursosFrontend = [
  {
    name:'HTML'
  },
  {
    name:'CSS'
  },
  {
    name:'React JS'
  },
  {
    name:'Angular'
  },
]

  ngOnInit(): void {
  }

}
