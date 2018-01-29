import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-secundario',
  templateUrl: './chat-secundario.component.html',
  styleUrls: ['./chat-secundario.component.css']
})
export class ChatSecundarioComponent implements OnInit {

  muestroVentana: boolean = false;
  chatS: string = 'Ocultar';

  constructor() { }

  ngOnInit() {
  }

  mostrarVentana(){
    this.muestroVentana = !this.muestroVentana;
    if(this.chatS === 'Ocultar'){
      this.chatS = 'Abrir';
    }
    else{
      this.chatS = 'Ocultar';
    }
  }
}
