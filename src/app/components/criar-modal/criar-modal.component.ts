import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'criar-modal',
  templateUrl: './criar-modal.component.html',
  styleUrls: ['./criar-modal.component.scss']
})
export class CriarModalComponent implements OnInit {
  protected formCriarbook!: FormGroup;
  protected mostrar: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  // * Monta o formControl 
  ngOnInit() {
    this.formCriarbook = this.formBuilder.group({
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

}
