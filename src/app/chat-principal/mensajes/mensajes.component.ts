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

  getColor(emisor: string): string{
    let color: string = '';
    if(emisor === 'chat-secundario'){
      color = 'blue';
    }
    else if(emisor === 'chat-principal'){
      color = 'green';
    }

    return color;
  }

  mostrarNombre(emisor: string): boolean{
    let mensajePrincipal: boolean = false;
    if(emisor === 'chat-secundario'){
      mensajePrincipal = true;
    }
    return mensajePrincipal;
  }

  getClassRow(emisor: string): string{
    let clase: string = '';
    if(emisor === 'chat-secundario'){
      clase = 'd-flex flex-row';
    }
    else if(emisor === 'chat-principal'){
      clase = 'd-flex flex-row-reverse';
    }

    return clase;
  }
  getClassColor(emisor: string): string{
    let clase: string = '';
    if(emisor === 'chat-secundario'){
      clase = 'p-2 alert alert-primary';
    }
    else if(emisor === 'chat-principal'){
      clase = 'p-2 alert alert-success';
    }

    return clase;
  }

}
