import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component';
import { TabelaForumComponent } from './tabela-forum/tabela-forum.component';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenu, MatMenuModule} from '@angular/material/menu'
import { CardFormacoesComponent } from './card-formacoes/card-formacoes.component';
import { CardForumComponent } from './card-forum/card-forum.component';
import { BotaoProfileComponent } from './botao-profile/botao-profile.component';
import { BotaoLangComponent } from './botao-lang/botao-lang.component';
import { BotaoComponent } from './botao/botao.component';

@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    SidenavComponent, BarraPesquisaComponent, TabelaForumComponent, CardFormacoesComponent, CardForumComponent, BotaoProfileComponent, BotaoLangComponent, BotaoComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,

  ],
  exports:[
    CardComponent,
    HeaderComponent,
    SidenavComponent,
    BarraPesquisaComponent,
    TabelaForumComponent,
    CardFormacoesComponent,
    CardForumComponent,
    BotaoProfileComponent,
    BotaoLangComponent,

    // modulos material
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatFormField,
    MatInputModule,
    MatMenuModule,

  ]
})
export class SharedModule { }
