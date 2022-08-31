
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutsourcingComponent } from './outsourcing/outsourcing.component';
import { HomeComponent } from './home/home.component';
import { SaasComponent } from './servicos/saas/saas.component';
import { TaasComponent } from './servicos/taas/taas.component';
import { ConsultoriaComponent } from './servicos/consultoria/consultoria.component';
import { GestaoComponent } from './servicos/gestao/gestao.component';
import { ArquiteturaComponent } from './arquitetura/arquitetura.component';

const routes: Routes = [
  {path: 'outsourcing', component: OutsourcingComponent},
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'saas', component: SaasComponent},
  {path: 'taas', component: TaasComponent},
  {path: 'consultoria', component: ConsultoriaComponent},
  {path: 'gestao', component: GestaoComponent},
  {path: 'arquitetura', component: ArquiteturaComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
