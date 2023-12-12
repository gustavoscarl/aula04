import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Endereco } from '../../modelos/Endereco';
import { EnderecosService } from '../../servicos/enderecos.service';

@Component({
  selector: 'app-endereco',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './endereco.component.html',
  styleUrl: './endereco.component.css'
})

export class EnderecoComponent {
  cep:string = '';

  constructor(private servico:EnderecosService){}

  obterEndereco():void{
    this.servico.retornarEndereco(this.cep)
    .subscribe(retorno => {console.log(retorno)});
  }
}
