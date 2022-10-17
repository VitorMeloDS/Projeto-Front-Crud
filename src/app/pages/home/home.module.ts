import { DeletarModalModule } from './../../components/deletar-modal/deletar-modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ModalModule } from 'src/app/components/atualizar-modal/modal.module';
import { CriarModalModule } from 'src/app/components/criar-modal/criar-modal.module';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    DeletarModalModule,
    ReactiveFormsModule,
    CriarModalModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  declarations: [HomeComponent]
})
export class HomeComponentModule {}
