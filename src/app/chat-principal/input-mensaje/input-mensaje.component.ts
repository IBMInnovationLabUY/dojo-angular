import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../datos/datos-servicio/datos.service';
import { Mensaje } from '../../datos/datos-modelo/datos.model';

@Component({
  selector: 'app-input-mensaje',
  templateUrl: './input-mensaje.component.html',
  styleUrls: ['./input-mensaje.component.css']
})
export class InputMensajeComponent implements OnInit {

  //Creamos el objeto mensaje
  mensaje: Mensaje;
  //Instanciamos en el servidor el servicio
  constructor(private datosService: DatosService) { }

  ngOnInit() {
    //Ya recibido el servicio de clientes, generamos un nuevo mensaje
    //como emisor el chat principal y texto vacio
    this.mensaje = this.datosService.nuevoMensajePrincipal();
  }

  //Generamos el metodo para enviar el mensaje al servicio
  enviarMensaje(){
    //Llamamos al metodo agregarMensajes() del servicio y le pasamos
    //nuestro objeto mensaje para que lo agrege al array de mensajes
    this.datosService.agregarMensajes(this.mensaje);
    //Inicializamos nuevamente el objeto mensaje en vacio.
    this.mensaje = this.datosService.nuevoMensajePrincipal();
  }
}
