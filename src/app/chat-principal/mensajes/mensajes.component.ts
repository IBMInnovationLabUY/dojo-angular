import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../datos/datos-servicio/datos.service';
import { Mensaje } from '../../datos/datos-modelo/datos.model';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  //Creamos un array donde tendremos todos los mensajes enviados.
  mensajes: Mensaje[];

  constructor(private datosService: DatosService) { }

  ngOnInit() {
    //Asignamos el valor del array de mensajes de servicios 
    //al array de mensajes de nuestro componente
    this.mensajes = this.datosService.getMensajes();
  }

}
