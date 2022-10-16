import { HomeServices } from './../../../services/home/home.service';
import { Component } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  protected books?: Book[];
  protected mostrar: boolean = false;

  constructor(
    private homeSvc: HomeServices
    ) { }

  // * Toda vez que a página é inicializada essa função busca os dados dos livros
  ngOnInit() {
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

}
