import { Component } from '@angular/core';
import { Exemplo } from '../../models/exemplo';
import { ExemploService } from '../../services/exemplo.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exemplo-list',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './exemplo-list.component.html',
  styleUrl: './exemplo-list.component.css'
})
export class ExemploListComponent {


  model : Exemplo = {id:0,nome:"",descricao:""};

  listaModel: Exemplo[] = [];

  constructor(private exemploService: ExemploService,  private router: Router){

  }


  atualizaLista(){
    this.listaModel = this.exemploService.getAll();
  }

  ngOnInit(): void {
    this.atualizaLista()
  }


  excluir(id:number){
    this.exemploService.remove(id);
    this.atualizaLista()
  }


}
