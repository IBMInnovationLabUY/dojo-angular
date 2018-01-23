import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatSecundarioComponent } from './chat-secundario/chat-secundario.component';
import { InputMensajeComponent } from './input-mensaje/input-mensaje.component';
import { MensajesComponent } from './mensajes/mensajes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChatSecundarioComponent, InputMensajeComponent, MensajesComponent]
})
export class ChatSecundarioModule { }
