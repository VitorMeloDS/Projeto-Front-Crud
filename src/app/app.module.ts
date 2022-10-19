import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// * Services
import { HomeServices } from './../services/home/home.service';
import { AtualizaBookService } from 'src/services/atualizar-book/atualizarBook.service';
import { DeleteBookService } from 'src/services/delete-book/deleteBook.service';

// * Components
import { ModalModule } from './components/atualizar-modal/modal.module';
import { DeletarModalModule } from './components/deletar-modal/deletar-modal.module';
import { CriarModalModule } from './components/criar-modal/criar-modal.module';

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
    DeletarModalModule,
    CriarModalModule
  ],
  providers: [
    HomeServices,
    AtualizaBookService,
    DeleteBookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
