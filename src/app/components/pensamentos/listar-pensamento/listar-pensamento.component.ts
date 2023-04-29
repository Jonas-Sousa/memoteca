import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamento = [
    {
      conteudo: "teste",
      autoria: "Jonas",
      modelo: "modelo2"
    },
    {
      conteudo: "testedasdasdasd",
      autoria: "Jonas",
      modelo: "modelo3"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
