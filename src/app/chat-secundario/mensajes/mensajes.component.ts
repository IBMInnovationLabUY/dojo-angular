import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../../datos/datos-modelo/datos.model';
import { DatosService } from '../../datos/datos-servicio/datos.service';

@Component({
  selector: 'app-mensajes',
  template: `
  <div class="mensaje">
    <div *ngFor="let mensaje of mensajes">
      <br>
      <span [ngClass]="getClass(mensaje.emisor)">{{ mensaje.texto }}</span>
      <br>
    </div>
  </div>`,
  styles: [`
    .mensaje{
      width: 40%;
  }
  .mensaje-principal{
      background-color: green;
      float: left;
  }
  .mensaje-secundario{
      background-color: blue;
      float: right;
}`]
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

  getClass(emisor: string): string{
    let clase: string = '';
    if(emisor === 'chat-secundario'){
      clase = 'mensaje-secundario';
    }
    else if(emisor === 'chat-principal'){
      clase = 'mensaje-principal';
    }

    return clase;
  }
}

