import { AtualizaBookService } from '../../../services/atualizar-book/atualizarBook.service';
import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'atualiza-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  protected mostrar: boolean = false;
  protected formAtualizaBook!: FormGroup;
  
  @Input() book?: Book;

  constructor(
    private formBuilder: FormBuilder,
    private atualizaSrv: AtualizaBookService
  ) {}

  // * Monta o formControl 
  ngOnInit() {
    this.formAtualizaBook = this.formBuilder.group({
      _id: [this.book?._id],
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      autor: ['', [Validators.required, Validators.minLength(5)]],
      isbn: ['', [Validators.required, Validators.minLength(5)]],
      resumo: ['', [Validators.required, Validators.minLength(10)]],
      ano_lancamento: ['', [Validators.required, Validators.pattern(/\d{4}/)]],
      _v: [this.book?.__v]
    });
  }

  // * Desabilita e habilita o modal
  toggle () {
    this.mostrar = !this.mostrar;
  }

  // * Método responsável pela atualização do livro
  protected atualizar() {
    this.atualizaSrv.putBook('/book', this.formAtualizaBook.value).subscribe({
      next: () => {
        this.mostrar = !this.mostrar;
        window.location.reload();
      },
      error: (err) => {
        console.log(err.message);
        alert(err.message);
      },
    })
  }


}
