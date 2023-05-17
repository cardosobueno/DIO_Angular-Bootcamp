import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges{

  @Input() nome: string = " ";

 
  constructor(){
    console.log(`CONSTRUTOR ${this.nome}`)
   
  }
  ngOnInit(): void {
    this.nome += "x";
    console.log(`on INIT ${this.nome}`);
    throw new Error('Method not implemented.');
  }


  ngOnChanges()
  {
    
    console.log(`ON CHENGE ${this.nome}`);
  }
}
