import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SettingComponent } from './pages/setting/setting.component';
import { VmTableComponent } from './pages/azure-env/vm-table/vm-table.component';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';



import { AppConfigService, initConfig } from './core/services/app-config/app-config.service';
import { DetialCardComponent } from './pages/azure-env/vm-table/detial-card/detial-card.component';
import { AzureSpSettingCardComponent } from './pages/setting/azure-sp-setting-card/azure-sp-setting-card.component';
import { AzureEnvComponent } from './pages/azure-env/azure-env.component';
import { CreateSpComponent } from './pages/setting/azure-sp-setting-card/create-sp/create-sp.component';
import { DeleteSpComponent } from './pages/setting/azure-sp-setting-card/delete-sp/delete-sp.component';



@NgModule({
  declarations: [
    AppComponent,
    AzureEnvComponent,
    AzureSpSettingCardComponent,
    DetialCardComponent,
    SettingComponent,
    VmTableComponent,
    CreateSpComponent,
    DeleteSpComponent
  ],
  imports: [
    AppRoutingModule,
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    DynamicDialogModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    NoopAnimationsModule,
    PanelModule,
    TableModule
  ],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [ AppConfigService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
