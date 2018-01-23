import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChatPrincipalModule } from './chat-principal/chat-principal.module';
import { ChatSecundarioModule } from './chat-secundario/chat-secundario.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatPrincipalModule,
    ChatSecundarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
