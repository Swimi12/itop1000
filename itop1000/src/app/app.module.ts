import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EchangeRatesService } from './services/echange-rates.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConverterComponent } from './converter/converter.component';

@NgModule({
  declarations: [AppComponent],
  providers: [EchangeRatesService, HttpClient],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    HttpClientModule,
    ConverterComponent,
  ],
})
export class AppModule {}
