import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isAliveCard:Boolean = true;
  ngOnInit(): void {
    console.log(this.isAliveCard);
  }
  title = 'diretivas-proj';
  

  
}
