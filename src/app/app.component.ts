import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ComponentesPostagemComponent } from './componentes-postagem/componentes-postagem.component';
import { EnderecoComponent } from './componentes/endereco/endereco.component';
EnderecoComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ComponentesPostagemComponent, EnderecoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aula04';
}
