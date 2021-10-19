import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full',
  },
  {
    path:'',
    component: AppComponent
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'layout',
    component:LayoutComponent,
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  }
  // {
  //   path:'',
  //   redirectTo:'/layout/home',
  //   pathMatch:'full',
  //   data:{breadcrumb:'Home'}
  // },
  // {
  //   path:'',
  //   component: AppComponent
  // },
  // {
  //   path:'layout',
  //   loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  // }
  ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
