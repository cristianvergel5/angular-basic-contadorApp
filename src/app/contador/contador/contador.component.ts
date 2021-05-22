import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  

  public title: String = 'contador App';

  numero: number = 0;
  base  : number = 5;



  acumular(valor: number){
    this.numero += valor;;
  }

 
  constructor() { }

  ngOnInit(): void {
  }

}
