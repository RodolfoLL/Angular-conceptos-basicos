import { Component, Input, Output,EventEmitter} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  // @Output() onNuevoPersonnaje:EventEmitter<Personaje> = new EventEmitter();
  @Input()
  nuevo:Personaje={
    nombre:'',
    poder:0
  }
  constructor(private dbzService:DbzService) {

   }
    
  agregar(){
    // this.onNuevoPersonnaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
    console.log(this.nuevo);
  }

}
