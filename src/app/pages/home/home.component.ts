import { FormGroup, FormBuilder } from '@angular/forms';
import { HomeServices } from './../../../services/home/home.service';
import { Component } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  protected books: Book[] = [];
  protected mostrar: boolean = false;
  protected formSearchBook!: FormGroup;

  constructor(
    private homeSvc: HomeServices,
    private formBuilder: FormBuilder
    ) { }

  // * Toda vez que a página é inicializada essa função busca os dados dos livros
  ngOnInit() {
    this.formSearchBook = this.formBuilder.group({
      search: ['']
    });

    this.homeSvc.getAll('/book').subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        console.log(err.message);
        alert(err.message);
      },
    })
  }

  protected search() {
    let searchBook: Book[] = [];
    if (this.formSearchBook.controls['search'].value) {
      for (const book of this.books) {
        if (book.titulo.toLocaleLowerCase().includes(this.formSearchBook.controls['search'].value.toLocaleLowerCase())){
          searchBook?.push(book);
        }
      }
    }
    if (searchBook)
      this.books = searchBook;
    if (!this.formSearchBook.controls['search'].value) {
      this.ngOnInit();
    }
  }

}
