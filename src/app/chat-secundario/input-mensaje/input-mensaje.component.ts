import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../datos/datos-servicio/datos.service';
import { Mensaje } from '../../datos/datos-modelo/datos.model';

@Component({
  selector: 'app-input-mensaje',
  template: `
  <div class="container">
    <div class="form-row">
      <div class="col-auto">
          <input type="text" class="form-control mr-sm-2" 
          placeholder="Escribe"
          [(ngModel)]="mensaje.texto" 
          (keyup.enter)="enviarMensaje()">
      </div>
      <div class="col-auto">
          <button (click)="enviarMensaje()"
          class="btn btn-outline-success my-2 my-sm-0">Enviar</button>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./input-mensaje.component.css']
})
export class InputMensajeComponent implements OnInit {

  mensaje: Mensaje;
  constructor(private datosService: DatosService) { }

  ngOnInit() {
    //Ya recibido el servicio de clientes, generamos un nuevo mensaje
    //como emisor el chat SECUNDARIO y texto vacio
    this.mensaje = this.datosService.nuevoMensajeSecundario();
  }

  enviarMensaje(){
    this.datosService.agregarMensajes(this.mensaje);
    //Inicializamos nuevamente el objeto mensaje en vacio con emisor SECUNDARIO
    this.mensaje = this.datosService.nuevoMensajeSecundario();
  }
}
