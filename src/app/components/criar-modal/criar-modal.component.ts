import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateaBookService } from 'src/services/crerate-book/createBook.service';

@Component({
  selector: 'criar-modal',
  templateUrl: './criar-modal.component.html',
  styleUrls: ['./criar-modal.component.scss']
})
export class CriarModalComponent implements OnInit {
  protected formCriarbook!: FormGroup;
  protected mostrar: boolean = false;

  @Input() booksLength!: number;

  constructor(
    private formBuilder: FormBuilder,
    private CreateaBookSrv: CreateaBookService,
  ) {}

  // * Monta o formControl 
  ngOnInit() {
    this.formCriarbook = this.formBuilder.group({
      id: [this.booksLength + 1],
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      autor: ['', [Validators.required, Validators.minLength(5)]],
      isbn: ['', [Validators.required, Validators.minLength(5)]],
      resumo: ['', [Validators.required, Validators.minLength(10)]],
      ano_lancamento: ['', [Validators.required, Validators.pattern(/\d{4}/)]]
    });
  }

  // * Desabilita e habilita o modal
  toggle () {
    this.mostrar = !this.mostrar;
  }

  // * cria o livro
  protected async createBook() {
    this.CreateaBookSrv.createBook('/book', this.formCriarbook.value).subscribe({
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
