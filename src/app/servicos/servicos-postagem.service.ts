import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postagem } from '../modelos/Postagem';

@Injectable({
  providedIn: 'root'
})
export class ServicosPostagemService {

  constructor(private http:HttpClient) { }

  private urlPostagem:string = 'https://jsonplaceholder.typicode.com/posts';

  getPost():Observable<Postagem[]>{
    return this.http.get<Postagem[]>(this.urlPostagem);
  }

  // Observable = Executa requisições em períodos de tempo
  // Subscriber = Recebe o retorno das requisições
}
