import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  protected booksLength!: number;

  constructor(
    private homeSvc: HomeServices,
    private formBuilder: FormBuilder
    ) { }

  // * Initialized every time the page is launched
  protected async ngOnInit() {
    this.formSearchBook = this.formBuilder.group({
      search: ['', Validators.required]
    });
    await this.loadBook();
  }

  // * Search books
  protected async search() {
    let searchBook: Book[] = [];
    if (this.formSearchBook.controls['search'].value) {
      for (const book of this.books) {
        if (book.titulo.toLocaleLowerCase().includes(this.formSearchBook.controls['search'].value.toLocaleLowerCase())){
          searchBook?.push(book);
        }
      }
    }
    this.books = searchBook;
    if (!this.formSearchBook.controls['search'].value) {
      await this.loadBook();
    }
  }

  // * Load Books for page
  private async loadBook() {
    this.homeSvc.getAll('/book').subscribe({
      next: (data) => {
        this.books = data;
        this.booksLength = this.books.length;
      },
      error: (err) => {
        console.log(err.message);
        alert(err.message);
      },
    })
  }

}
