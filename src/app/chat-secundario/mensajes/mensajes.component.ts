import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../../datos/datos-modelo/datos.model';
import { DatosService } from '../../datos/datos-servicio/datos.service';

@Component({
  selector: 'app-mensajes',
  template: `
  <div class="container h-25">
    <div *ngFor="let mensaje of mensajes">
      <span [ngClass]="getClass(mensaje.emisor)">{{ mensaje.texto }}</span>
      <br>
    </div>
  </div>`,
  styles: [``]
})
export class MensajesComponent implements OnInit {

  mensajes: Mensaje[];

  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.mensajes = this.datosService.getMensajes();
  }

  mostrarNombre(emisor: string): boolean{
    let mensajeSecundario: boolean = false;
    if(emisor === 'chat-secundario'){
      mensajeSecundario = true;
    }
    return mensajeSecundario;
  }

  getClass(emisor: string): Array<string>{
    let clase: Array<string> = [];
    if(emisor === 'chat-secundario'){
      clase.push('badge badge-primary float-right');
    }
    else if(emisor === 'chat-principal'){
      clase.push('badge badge-success float-left');
    }

    return clase;
  }
}

