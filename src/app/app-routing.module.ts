import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/layout/home',
    pathMatch:'full',
    data:{breadcrumb:'Home'}
  },
  {
    path:'',
    component: AppComponent
  },
  {
    path:'layout',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
