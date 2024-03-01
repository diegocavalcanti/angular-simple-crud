import { Component } from "@angular/core";
import { Exemplo } from "../../models/exemplo";
import { ExemploService } from "../../services/exemplo.service";
import { Router, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AlertService } from "../alert/alert.service";
import { AlertComponent } from "../alert/alert.component";


@Component({
  selector: "app-exemplo-form",
  standalone: true,
  imports: [RouterModule, FormsModule, AlertComponent],
  templateUrl: "./exemplo-form.component.html",
  styleUrl: "./exemplo-form.component.css",
})
export class ExemploFormComponent {
  model: Exemplo = { id: 0, nome: "", descricao: "" };

  constructor(
    private alertService: AlertService,
    private exemploService: ExemploService,
    private router: Router,

  ) {}

  ngOnInit(): void {}

  salvar() {

    if (this.model.id == 0){
      this.alertService.showError("Informe o ID");
      return;
    }

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
