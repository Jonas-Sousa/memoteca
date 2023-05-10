import { Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamento: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = ''
  favoritos: boolean = false
  listaFavoritos: Pensamento[] = []
  titulo: string = 'Meu Mural'

  constructor(private service: PensamentoService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamento) => {
      this.listaPensamento = listaPensamento
    })
  };

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos)
    .subscribe(listaPensamentos => {
      this.listaPensamento.push(...listaPensamentos)
      if(!listaPensamentos.length) {
        this.haMaisPensamentos = false
      }
    })
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro,this.favoritos)
      .subscribe(listaPensamentos => {
        this.listaPensamento = listaPensamentos
      })
  }

  recarregarComponente() {
      this.favoritos = false
      this.paginaAtual = 1
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
      this.router.onSameUrlNavigation = 'reload'
      this.router.navigate([this.router.url])
  }

  listarFavoritos() {
    this.titulo = 'Meus Favoritos'
    this.favoritos = true
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro,this.favoritos)
      .subscribe(listaPensamentosFavoritos => {
        this.listaPensamento = listaPensamentosFavoritos
        this.listaFavoritos = listaPensamentosFavoritos
      })
  }


}
