import { CoreModule } from './core/core.module';
import { InputMaskDirective } from './shared/directives/input-mask.directive';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {
  ButtonModule,
  DataTableModule,
  DialogModule,
  InputTextModule,
  PaginatorModule,
  MessagesModule,
  InputMaskModule
} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    InputMaskDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    DataTableModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
