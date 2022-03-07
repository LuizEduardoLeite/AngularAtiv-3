import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atividade3';
  cont:number =0

  aumentar(){
    this.cont++
  }

  diminuir(){
    this.cont--
  }
  
  
}
