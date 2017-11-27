import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TipoAuto } from '../entidades/tipo-auto';

@Component({
    selector: 'app-tipo-auto',
    templateUrl: './tipo-auto.component.html',
    styleUrls: ['./tipo-auto.component.css']
})
export class TipoAutoComponent implements OnInit {

    tipoAutos: TipoAuto[] = new Array(0);

    ngOnInit() {
        this.leer();
    }

    leer(): void {
         // TO DO Alexis: traer todos los tipoAuto de la bd 
         
        let tipoauto1 = new TipoAuto();
        tipoauto1.id = 1;
        tipoauto1.nombre = "Sedan";

        let tipoauto2 = new TipoAuto();
        tipoauto2.id = 2;
        tipoauto2.nombre = "Jeep";

        this.tipoAutos.push(tipoauto1);
        this.tipoAutos.push(tipoauto2);       
    }

    grabar(): void {
        // TO DO Alexis: colocar el codigo de grabde la variable this.tipoAuto en la BD
    }

    nuevo(): void {
        let tipoautonew = new TipoAuto();
        tipoautonew.id = 0;
        tipoautonew.nombre = "";

        this.tipoAutos.push(tipoautonew);
    }
}
