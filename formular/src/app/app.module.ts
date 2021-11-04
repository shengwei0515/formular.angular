import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

import { DetialCardComponent } from './pages/vm-table/detial-card/detial-card.component';
import { SettingCardComponent } from './pages/setting/setting-card/setting-card.component';



@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    VmTableComponent,
    DetialCardComponent,
    SettingCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    TableModule,
    DynamicDialogModule,
    MessageModule,
    MessagesModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
