import { Component } from '@angular/core';
import { ServicosPostagemService } from '../servicos/servicos-postagem.service';
import { Postagem } from '../modelos/Postagem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componentes-postagem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componentes-postagem.component.html',
  styleUrl: './componentes-postagem.component.css'
})
export class ComponentesPostagemComponent {
  
  constructor(private servicoPostagem:ServicosPostagemService){}

  postagens:Postagem[] = [];

  ngOnInit(){
    this.listarPostagens()
  }

  listarPostagens():void{
    this.servicoPostagem.getPost().subscribe(post => {
      // console.table(post);
      this.postagens = post;
    })
  }
}
