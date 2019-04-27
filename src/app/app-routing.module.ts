import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhotolibraryComponent } from './photolibrary/photolibrary.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'photolibrary', component: PhotolibraryComponent },
  { path: 'photographer', component: PhotographerComponent },
  { path: 'photographer/:id', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
