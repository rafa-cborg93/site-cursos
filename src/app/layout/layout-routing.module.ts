import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
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
    component:HomeComponent,
    data:{breadcrumb:'home'}
  },
  {
    path:'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    data:{breadcrumb: 'cursos'}
  },
  {
    path:'forum',
    component:ForumComponent,
    data:{breadcrumb:'forum'}
  },{
    path:'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
