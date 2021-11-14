import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SettingComponent } from './pages/setting/setting.component';
import { VmTableComponent } from './pages/vm-table/vm-table.component';

import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { AccordionModule } from 'primeng/accordion';

import { AppConfigService, initConfig } from './core/services/app-config/app-config.service';
import { DetialCardComponent } from './pages/vm-table/detial-card/detial-card.component';
import { AzureSpSettingCardComponent } from './pages/setting/azure-sp-setting-card/azure-sp-setting-card.component';



@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    VmTableComponent,
    DetialCardComponent,
    AzureSpSettingCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NoopAnimationsModule,
    AppRoutingModule,
    TableModule,
    DynamicDialogModule,
    MessageModule,
    MessagesModule,
    AccordionModule
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
