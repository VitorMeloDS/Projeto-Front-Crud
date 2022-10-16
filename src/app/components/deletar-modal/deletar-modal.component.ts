import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'deletar-modal',
  templateUrl: './deletar-modal.component.html',
  styleUrls: ['./deletar-modal.component.scss']
})
export class DeletarModalComponent implements OnInit {
  protected mostrar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // * Desabilita e habilita o modal
  toggle () {
    this.mostrar = !this.mostrar;
  }

}
