import { Component } from '@angular/core';

interface Personaje{
  nombre: string;
  poder:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{
  Personajes: Personaje[] = [
    {nombre: 'Goku', poder: 9001},
    {nombre: 'Vegeta', poder: 9002},
  ];
  nuevo:Personaje={
    nombre:'',
    poder:0
  }
  agregar(){
    this.Personajes.push(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
    console.log(this.nuevo);
  }
}
