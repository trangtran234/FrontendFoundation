import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatMenuModule, MatIconModule, MatTableModule, MatSortModule, MatCheckboxModule} from '@angular/material';
import { MenuComponent } from './components/menu/menu.component';
import { DocumentsTableComponent } from './components/documents-table/documents-table.component';
import { HttpClientModule } from '@angular/common/http';

import { DocumentService } from './services/document.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DocumentsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatMenuModule, 
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatSortModule,
    MatCheckboxModule
  ],
  providers: [DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
