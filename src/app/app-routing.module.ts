import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'liste-poste',
    pathMatch: 'full'
  },
  
  { path: 'liste-poste', loadChildren: './liste-poste/liste-poste.module#ListePostePageModule' },
  { path: 'add-poste', loadChildren: './add-poste/add-poste.module#AddPostePageModule' },
  { path: 'poste-details/:id', loadChildren: './poste-details/poste-details.module#PosteDetailsPageModule' },
  { path: 'localisation', loadChildren: './localisation/localisation.module#LocalisationPageModule' }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
