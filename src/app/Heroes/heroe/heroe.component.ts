import { Component } from "@angular/core";

@Component({
    selector: "app-heroe",
    templateUrl: "./heroe.component.html",
})


export class HeroeComponent{
    nombre : string = "Aquaman";
    hp:number = 100;

    get nombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void{
         this.nombre = "Batman";
    }
    cambiarEdad():void{
        this.hp = 30;
    }
    obtenerNombre():string {
        return `${this.nombre} tiene ${this.hp} puntos de vida`;
    }

}