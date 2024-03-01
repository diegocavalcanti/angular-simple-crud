import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exemplo } from '../models/exemplo';


@Injectable({
  providedIn: 'root'
})
export class ExemploService {



  models: Exemplo[] = [];

  constructor() {

    this.models.push({id:1, nome: "Exemplo 1", descricao: "Descrição 1"});
    this.models.push({id:2, nome: "Exemplo 2", descricao: "Descrição 2"});
    this.models.push({id:3, nome: "Exemplo 3", descricao: "Descrição 3"});

  }

  // Retorna todos os Exemplos
  getAll(): Exemplo[] {
    return this.models;
  }

  // Adiciona um Exemplo
  save(model: Exemplo): void {


    //editar
    if (model.id && model.id > 0) {
      // Se o modelo tiver um ID, editamos o elemento correspondente na lista
      const index = this.models.findIndex(item => item.id === model.id);
      if (index !== -1) {
        this.models[index] = model;
      }

   //salvar
    } else {
      // Se o modelo não tiver um ID, inserimos um novo elemento na lista
      model.id = this.models.length +1;
      this.models.push(model);
    }
  }

  // Retorna um Exemplo pelo ID
  getById(id: number): Exemplo | undefined {
    return this.models.find(Exemplo => Exemplo.id === id);
  }

  // Atualiza um Exemplo existente
  update(Exemplo: Exemplo): void {
    const index = this.models.findIndex(m => m.id === Exemplo.id);
    if (index !== -1) {
      this.models[index] = Exemplo;
    }
  }

  // Remove um Exemplo pelo ID
  remove(id: number): void {
    this.models = this.models.filter(Exemplo => Exemplo.id !== id);
  }


  // //url da api
  // private readonly API = 'http://localhost:8080/Exemplo'

  // constructor(private http: HttpClient) { }

  // listar(): Observable<Exemplo[]> {
  //   return this.http.get<Exemplo[]>(this.API)
  // }

  // gravar(Exemplo:Exemplo): Observable<Exemplo> {
  //   return this.http.post<Exemplo>(this.API,Exemplo)
  // }



  // editar(Exemplo: Exemplo): Observable<Exemplo> {
  //   const url = `${this.API}/${Exemplo.id}`
  //   return this.http.put<Exemplo>(url, Exemplo )

  // }

  // excluir(id: number): Observable<void> {
  //   const url = `${this.API}/${id}`
  //   return this.http.delete<void>(url)
  // }

  // buscarPorId(id: number): Observable<Exemplo> {
  //   const url = `${this.API}/${id}`
  //   return this.http.get<Exemplo>(url)
  // }
}
