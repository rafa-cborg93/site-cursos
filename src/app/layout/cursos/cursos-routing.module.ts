import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosDashboardComponent } from './cursos-dashboard/cursos-dashboard.component';
import { CursosProgramacaoComponent } from './cursos-programacao/cursos-programacao.component';
import { CursosFrontendComponent } from './cursos-frontend/cursos-frontend.component';
import { CursosBackendComponent } from '../cursos/cursos-backend/cursos-backend.component';
import { CursosDevopsComponent } from './cursos-devops/cursos-devops.component';

const routes: Routes = [
  {
    path:'',
    component: CursosDashboardComponent,
  },
  {
    path:'programacao',
    component: CursosProgramacaoComponent,
    data:{breadcrumb:'programacao'}
  },
  {
    path:'frontend',
    component: CursosFrontendComponent,
    data:{breadcrumb:'Front-end'}
  },
  {
    path:'backend',
    component: CursosBackendComponent,
    data:{breadcrumb:'back-end'}
  },
  {
    path:'devops',
    component: CursosDevopsComponent,
    data:{breadcrumb:'devops'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
