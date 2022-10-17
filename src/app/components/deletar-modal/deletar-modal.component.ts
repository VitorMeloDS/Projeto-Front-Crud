import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'deletar-modal',
  templateUrl: './deletar-modal.component.html',
  styleUrls: ['./deletar-modal.component.scss']
})
export class DeletarModalComponent {
  protected mostrar: boolean = false;

  @Input() bookName: string = '';

  constructor() { }

  ngOnInit() {
  }

  // * Desabilita e habilita o modal
  toggle () {
    this.mostrar = !this.mostrar;
  }

}
