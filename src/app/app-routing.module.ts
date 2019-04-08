import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentDetailComponent } from './components/document-detail/document-detail.component';
import { DocumentsTableComponent } from './components/documents-table/documents-table.component';

const routes: Routes = [
  { path: 'document', component: DocumentsTableComponent },
  { path: 'detail/:id', component: DocumentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
