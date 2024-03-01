import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExemploListComponent } from './components/exemplo-list/exemplo-list.component';
import { ExemploFormComponent } from './components/exemplo-form/exemplo-form.component';

export const routes: Routes = [

  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "exemplo-list",
    component: ExemploListComponent,
  },
  {
    path: "exemplo-form",
    component: ExemploFormComponent,
  },

];
