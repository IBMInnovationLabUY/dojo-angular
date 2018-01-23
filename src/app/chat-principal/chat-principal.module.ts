import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPrincipalComponent } from './chat-principal/chat-principal.component';
import { InputMensajeComponent } from './input-mensaje/input-mensaje.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { DatosService } from '../datos/datos-servicio/datos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChatPrincipalComponent, InputMensajeComponent, MensajesComponent],
  providers: [DatosService],
  exports: [ChatPrincipalComponent]
})
export class ChatPrincipalModule { }
