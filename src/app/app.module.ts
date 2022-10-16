import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeServices } from './../services/home/home.service';
import { AtualizaBookService } from 'src/services/atualizarBook/atualizarBook.service';

import { ModalModule } from './components/atualizaModal/modal.module';
import { DeletarModalModule } from './components/deletar-modal/deletar-modal.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModalModule,
    DeletarModalModule
  ],
  providers: [
    HomeServices,
    AtualizaBookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
