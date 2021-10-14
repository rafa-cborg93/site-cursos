import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosFrontendComponent } from './cursos-frontend/cursos-frontend.component';
import { CursosDashboardComponent } from './cursos-dashboard/cursos-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursosComponent } from './cursos.component';



@NgModule({
  declarations: [
    CursosFrontendComponent,
    CursosDashboardComponent,
    CursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule
  ]
})
export class CursosModule { }
