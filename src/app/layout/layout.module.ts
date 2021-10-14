import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component';
import { CursosModule } from './cursos/cursos.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    ForumComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CursosModule,
    SharedModule
  ]
})
export class LayoutModule { }
