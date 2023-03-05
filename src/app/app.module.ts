import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SalaComponent } from './components/sala/sala.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormularioNovaSalaComponent } from './components/formulario-nova-sala/formulario-nova-sala.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListaSalasComponent } from './components/lista-salas/lista-salas.component';

@NgModule({
  declarations: [
    AppComponent,
    SalaComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FormularioNovaSalaComponent,
    MessagesComponent,
    ListaSalasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


