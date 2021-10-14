import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosDashboardComponent } from './cursos-dashboard/cursos-dashboard.component';
import { CursosFrontendComponent } from './cursos-frontend/cursos-frontend.component';

const routes: Routes = [
  {
    path:'',
    component: CursosDashboardComponent,
  },
  {
    path:'frontend',
    component: CursosFrontendComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
