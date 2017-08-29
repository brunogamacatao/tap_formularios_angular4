import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { CpfDirective } from './cpf.directive';
import { MenuTopoComponent } from './menu-topo/menu-topo.component';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
import { DetalheAlunoComponent } from './detalhe-aluno/detalhe-aluno.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

import { AlunoService } from './aluno.service';
import { PokemonsService } from './pokemons.service';
import { PokemonsComponent } from './pokemons/pokemons.component';

const rotas: Routes = [
  { path: 'alunos', component: ListaAlunosComponent },
  { path: 'alunos/novo', component: AlunoFormComponent },
  { path: 'alunos/:id', component: DetalheAlunoComponent },
  { path: 'pokemons', component: PokemonsComponent },
  { path: '',
    redirectTo: '/alunos/novo',
    pathMatch: 'full'
  },
  { path: '**', component: PaginaNaoEncontradaComponent }  
];

@NgModule({
  declarations: [
    AppComponent,
    AlunoFormComponent,
    CpfDirective,
    MenuTopoComponent,
    ListaAlunosComponent,
    DetalheAlunoComponent,
    PaginaNaoEncontradaComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    AlunoService, 
    PokemonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
