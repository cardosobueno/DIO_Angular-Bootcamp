import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent
  implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  quantidade: number = 0;

  adicionar() {
    this.quantidade += 1;
  }
  remover() {
    this.quantidade -= 1;
  }

  ngDoCheck(): void {
    console.log("docheck")
  }
  ngOnInit(): void {
    console.log("oninit")
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterViewChecked(): void {
    console.log(" ngAfterViewChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngOnDestroy(): void {
    console.log("godbae my fren");
  }
}
