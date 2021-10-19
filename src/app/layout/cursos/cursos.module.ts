import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosDashboardComponent } from './cursos-dashboard/cursos-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursosComponent } from './cursos.component';
import { CursosProgramacaoComponent } from './cursos-programacao/cursos-programacao.component';
import { CursosFrontendComponent } from './cursos-frontend/cursos-frontend.component';
import { CursosBackendComponent } from './cursos-backend/cursos-backend.component';
import { CursosDevopsComponent } from './cursos-devops/cursos-devops.component';



@NgModule({
  declarations: [
    CursosDashboardComponent,
    CursosComponent,
    CursosProgramacaoComponent,
    CursosFrontendComponent,
    CursosBackendComponent,
    CursosDevopsComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule
  ]
})
export class CursosModule { }
