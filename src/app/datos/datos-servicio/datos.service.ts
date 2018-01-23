import { Injectable } from '@angular/core';
import { Mensaje } from '../datos-modelo/datos.model';

@Injectable()
export class DatosService {

  /*  Creamos un array de mensajes, donde
      guardaremos todos los mensajes enviados por los chats. */
  private mensajes: Mensaje[]; 

  constructor() { 

    // Inicializamos el array desde el constructor con datos de prueba
    this.mensajes = [ //
      {
        emisor: 'chat-secundario',
        texto: 'Hola soy un texto de prueba del chat secundario'  
      },
      {
        emisor: 'chat-principal',
        texto: 'Hola soy un texto de prueba del chat principal'  
      },
    ];

    // Inicializamos el array vacio (Para cuando no queramos los datos de prueba)
    //this.mensajes = [];

  }

  //Retornamos el array de mensajes
  getMensajes(){
    return this.mensajes;
  }

  //Recibimos un mensaje y lo agregamos al array
  agregarMensajes(mensaje: Mensaje){
    this.mensajes.push(mensaje);
  }

  //Devolvemos un mensaje enviado por el chat principal
  nuevoMensajePrincipal(): Mensaje{
    return {
      emisor: 'chat-principal',
      texto: ''
    };
  }

  //Devolvemos un mensaje enviado por el chat principal
  nuevoMensajeSecundario(): Mensaje{
    return {
      emisor: 'chat-secundario',
      texto: ''
    };
  }
}