import { DeleteBookService } from './../../../services/delete-book/deleteBook.service';
import { Component, Input } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'deletar-modal',
  templateUrl: './deletar-modal.component.html',
  styleUrls: ['./deletar-modal.component.scss']
})
export class DeletarModalComponent {
  protected mostrar: boolean = false;

  @Input() book?: Book;

  constructor(
    private deleteBookSrv: DeleteBookService
  ) { }

  // * Desabilita e habilita o modal
  toggle () {
    this.mostrar = !this.mostrar;
  }

  // * Deleta o livro
  deleteBook() {
    this.deleteBookSrv.deleteBook('/book', this.book?.id).subscribe({
      next: () => {
        this.mostrar = !this.mostrar;
        window.location.reload();
      },
      error: (err) => {
        console.log(err.message);
        alert(err.message);
      },
    });
  }

}
