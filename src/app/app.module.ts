import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AreasDeAtuacaoComponent } from './areas-de-atuacao/areas-de-atuacao.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContatoComponent } from './contato/contato.component';
import { ComoChegarComponent } from './como-chegar/como-chegar.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    PortfolioComponent,
    AreasDeAtuacaoComponent,
    ContatoComponent,
    ComoChegarComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'empresa', component: EmpresaComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'areas-de-atuacao', component: AreasDeAtuacaoComponent },
      { path: 'contato', component: ContatoComponent },
      { path: 'como-chegar', component: ComoChegarComponent },
      { path: '', redirectTo: '/empresa', pathMatch: 'full'}, // Faz definir uma rota como padrão
      { path: '**', component: PageNotFoundComponent }
    ]),
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
