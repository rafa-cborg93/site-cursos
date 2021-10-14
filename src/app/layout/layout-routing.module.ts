import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
  },
  {
    path:'forum',
    component:ForumComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
