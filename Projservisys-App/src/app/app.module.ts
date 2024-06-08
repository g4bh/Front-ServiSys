import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/Solicitante/nav/nav.component';
import { PaginaInicialComponent } from './pages/solicitante/pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './pages/login/login.component';
import { NovaOrdemComponent } from './pages/solicitante/nova-ordem/nova-ordem.component';
import { SuasOrdensComponent } from './pages/solicitante/suas-ordens/suas-ordens.component';
import { PaginaInicialCoordComponent } from './pages/coordenador/pagina-inicial-coord/pagina-inicial-coord.component';
import { NavCoordComponent } from './components/coordenador/nav-coord/nav-coord.component';
import { AprovacoesPendentesComponent } from './pages/coordenador/aprovacoes-pendentes/aprovacoes-pendentes.component';
import { SuasAprovacoesComponent } from './pages/coordenador/suas-aprovacoes/suas-aprovacoes.component';
import { PaginaInicialCpdComponent } from './pages/CPD/pagina-inicial-cpd/pagina-inicial-cpd.component';
import { NavCpdComponent } from './components/cpd/nav-cpd/nav-cpd.component';
import { OrdensServicoComponent } from './pages/CPD/ordens-servico/ordens-servico.component';
import { ModalCpdComponent } from './components/cpd/modal-cpd/modal-cpd.component';
import { ModalCoordComponent } from './components/coordenador/modal-coord/modal-coord.component';
import { ModalSolicitanteComponent } from './components/Solicitante/modal-solicitante/modal-solicitante.component';
import { AddUsuarioComponent } from './pages/administrador/add-usuario/add-usuario.component';
import { NavAdmComponent } from './components/administrador/nav-adm/nav-adm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PaginaInicialComponent,
    LoginComponent,
    NovaOrdemComponent,
    SuasOrdensComponent,
    PaginaInicialCoordComponent,
    NavCoordComponent,
    AprovacoesPendentesComponent,
    SuasAprovacoesComponent,
    PaginaInicialCpdComponent,
    NavCpdComponent,
    OrdensServicoComponent,
    ModalCpdComponent,
    ModalCoordComponent,
    ModalSolicitanteComponent,
    AddUsuarioComponent,
    NavAdmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
