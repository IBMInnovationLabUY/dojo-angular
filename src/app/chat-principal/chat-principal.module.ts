import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPrincipalComponent } from './chat-principal/chat-principal.component';
import { InputMensajeComponent } from './input-mensaje/input-mensaje.component';
import { MensajesComponent } from './mensajes/mensajes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChatPrincipalComponent, InputMensajeComponent, MensajesComponent]
})
export class ChatPrincipalModule { }
