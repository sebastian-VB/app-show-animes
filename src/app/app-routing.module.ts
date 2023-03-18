import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //mostrará la pantalla del home al momento de entrar
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'animes', loadChildren: () => import('./pages/animes/animes.module').then(m => m.AnimesModule) },
  { path: 'mangas', loadChildren: () => import('./pages/mangas/mangas.module').then(m => m.MangasModule) },
  { path: '**', redirectTo: '/home', pathMatch: 'full' } //debe mostrar una pagina para el error 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
