import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutsourcingComponent } from './outsourcing/outsourcing.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzModalService } from 'ng-zorro-antd/modal';
import { HomeComponent } from './home/home.component';
import { SaasComponent } from './servicos/saas/saas.component';
import { TaasComponent } from './servicos/taas/taas.component';
import { ConsultoriaComponent } from './servicos/consultoria/consultoria.component';
import { GestaoComponent } from './servicos/gestao/gestao.component';
import { ArquiteturaComponent } from './arquitetura/arquitetura.component';


registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    OutsourcingComponent,
    HomeComponent,
    SaasComponent,
    TaasComponent,
    ConsultoriaComponent,
    GestaoComponent,
    ArquiteturaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzModalModule
  ],
  providers: [{ provide: NZ_I18N, useValue: pt_BR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
