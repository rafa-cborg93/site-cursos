import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosBackendComponent } from './cursos-backend/cursos-backend.component';
import { CursosDashboardComponent } from './cursos-dashboard/cursos-dashboard.component';
import { CursosDevopsComponent } from './cursos-devops/cursos-devops.component';
import { CursosFrontendComponent } from './cursos-frontend/cursos-frontend.component';
import { CursosProgramacaoComponent } from './cursos-programacao/cursos-programacao.component';

const routes: Routes = [
  {
    path:'',
    component:CursosDashboardComponent
  },
  {
    path:'programacao',
    component:CursosProgramacaoComponent
  },
  {
    path:'frontend',
    component:CursosFrontendComponent
  },
  {
    path:'backend',
    component:CursosBackendComponent
  },
  {
    path:'devops',
    component:CursosDevopsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
