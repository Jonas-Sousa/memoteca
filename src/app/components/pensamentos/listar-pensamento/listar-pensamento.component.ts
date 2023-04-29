import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamento = [
    {
      conteudo: "testdfgdfgdfgdsdfsdfsdfsdfsdfsdfgdfgdfgdfgdfgde",
      autoria: "Jonas",
      modelo: "modelo2"
    },
    {
      conteudo: "Passo informações para o e vou colocando o texto aqui ate coisa as coisa componete filho se aqui coisa ac coisa",
      autoria: "Jonas",
      modelo: "modelo3"
    },
    {
      conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing b explicabo sed voluptates, animi tempora autem ai voi coisano as coisa de uma forma que a coisa qui se coise mais coisas e quando coisa ele vai coisa a coisa coisada de um jeito coisa vou coisa mais coisa ate q a coisa coise ",
      autoria: "Jonas",
      modelo: "modelo1"
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
