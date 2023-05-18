import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent {
  estilo: string = "enable"
  corFundo: string = "wheat"
  item: string = ""
  listaItem: string[] = []

  

  adicionaLista(valor: string) {
    this.listaItem.push(valor);
    
    console.log(this.listaItem)
  }



  trocaCor() {
    if (this.estilo === "enable") {
      this.estilo = "disable";
    } else {
      this.estilo = "enable";
    }
  }

}
