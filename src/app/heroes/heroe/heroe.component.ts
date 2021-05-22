import { Component, OnInit } from '@angular/core';
import { NumericLiteral } from 'typescript';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  
nombre: string = 'Iron man';

edad: number = 45;

get nombreCapitalizado(){
  return this.nombre.toUpperCase();

}
  constructor() { }

  ngOnInit(): void {
  }
  
  

  obtenerNombre(): string{
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void{
    this.nombre='Spider man';
  }

  cambiarEdad(): void{
    this.edad=50;
  }
}
