import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  produtos:string[] = []
  menuType:string = "admin"

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "fonte"
    ];
  }

  ngOnInit(): void {}

  adicionar(){
    this.produtos.push("joao")
  }
  remover(index: number){
    this.produtos.splice(index,1)
  }

}
