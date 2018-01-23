import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatSecundarioComponent } from './chat-secundario/chat-secundario.component';
import { InputMensajeComponent } from './input-mensaje/input-mensaje.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { DatosService } from '../datos/datos-servicio/datos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChatSecundarioComponent, InputMensajeComponent, MensajesComponent],
  providers: [DatosService],
  exports: [ChatSecundarioComponent]
})
export class ChatSecundarioModule { }
