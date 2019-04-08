import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentDetailComponent } from './components/document-detail/document-detail.component';

const routes: Routes = [
  { path: 'document/:name', component: DocumentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
