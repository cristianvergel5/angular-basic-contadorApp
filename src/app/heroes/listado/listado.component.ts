import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
  heroes:string[]=['Spider man', 'iron man', 'Hulk', 'Capitan america'];
  
  heroeBorrado:string= '';

  bandera = false;


  borrarHeroe(){
    /* this.heroes.splice(1, 1); */
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
