import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { TipoComponent } from './tipo/tipo.component';


const routes: Routes = [
  { path: 'categorias', component: CategoriaComponent },
  { path: 'tipos', component: TipoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
