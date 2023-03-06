import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { SalaComponent } from "./components/sala/sala.component";
import { HomeComponent } from "./components/home/home.component";
import { ListaSalasComponent } from "./components/lista-salas/lista-salas.component";
import { SalaCriadaComponent } from "./components/sala-criada/sala-criada.component";
import { EditarSalaComponent } from "./components/editar-sala/editar-sala.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app-sala', component: SalaComponent },
  { path: 'app-lista-salas', component: ListaSalasComponent },
  { path: 'sala/editar/:id', component: EditarSalaComponent },
  { path: 'sala/:id', component: SalaCriadaComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
