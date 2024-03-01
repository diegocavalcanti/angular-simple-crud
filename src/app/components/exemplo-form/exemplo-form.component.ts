import { Component } from "@angular/core";
import { Exemplo } from "../../models/exemplo";
import { ExemploService } from "../../services/exemplo.service";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AlertService } from "../alert/alert.service";



@Component({
  selector: "app-exemplo-form",
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: "./exemplo-form.component.html",
  styleUrl: "./exemplo-form.component.css",
})
export class ExemploFormComponent {
  model: Exemplo = { id: 0, nome: "", descricao: "" };

  constructor(
    private alertService: AlertService,
    private exemploService: ExemploService,
    private route: ActivatedRoute,
    private router: Router,

  ) {}

  ngOnInit(): void {

    //edicao do registro
    const id = this.route.snapshot.paramMap.get('id')
    let retorno: Exemplo | undefined =  this.exemploService.getById(parseInt(id!));
    if (retorno){
      this.model = retorno
    }

  }

  salvar() {


    if (!this.model.nome){
      this.alertService.showError("Informe o Nome");
      return;
    }


    this.exemploService.save(this.model);

    this.router.navigate(["/exemplo-list"]);
  }

  cancelar() {
    this.router.navigate(["/exemplo-list"]);
  }
}
