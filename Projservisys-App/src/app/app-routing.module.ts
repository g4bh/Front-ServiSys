import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { OrdensServicoComponent } from './pages/CPD/ordens-servico/ordens-servico.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'nav', component: NavComponent},
  { path: 'home', component: PaginaInicialComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nova-ordem', component: NovaOrdemComponent, data: { title: 'Nova Ordem' } },
  { path: 'suas-ordens', component: SuasOrdensComponent, data: { title: 'Suas Ordens' } },
  { path: 'home/coord', component: PaginaInicialCoordComponent },
  { path: 'aprovacoes-pendentes', component: AprovacoesPendentesComponent, data: { title: 'Aprovações pendentes' } },
  { path: 'suas-aprovacoes', component: SuasAprovacoesComponent, data: { title: 'Suas aprovações' } },
  { path: 'home/cpd', component: PaginaInicialCpdComponent },
  { path: 'ordens-servico', component: OrdensServicoComponent, data: { title: 'Ordens de sevriço' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
