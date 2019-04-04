import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { Document } from '../../models/document.model';

@Component({
  selector: 'app-documents-table',
  templateUrl: './documents-table.component.html',
  styleUrls: ['./documents-table.component.less']
})

export class DocumentsTableComponent implements OnInit {
  dataSource = new DocumentDataSource(this.documentService)
  displayedColumns: string[] = ['imagePath', 'name', 'modified', 'modifiedBy'];

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
  }
}

export class DocumentDataSource extends DataSource<any> {
  constructor(private documentService: DocumentService) {
    super()
  }

  connect(): Observable<Document[]> {
    return this.documentService.getDocument();
  }

  disconnect() {}
}

// export interface PeriodicElement {
//   img: string;
//   name: string;
//   modified: string;
//   modifiedBy: string;
//   addnew: string
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { img: 'https://img.icons8.com/color/32/000000/ms-excel.png', name: 'CAS', modified: 'April 30', modifiedBy: 'Megan Bowen', addnew: ''},
//   { img: 'https://img.icons8.com/color/32/000000/ms-excel.png', name: 'CoasterAndBargeLoading.xlsx', modified: 'A few seconds ago', modifiedBy: 'Adminstrator MOD', addnew: ''},
//   { img: 'https://img.icons8.com/color/32/000000/ms-excel.png', name: 'RevenueByServices.xlsx', modified: 'A few seconds ago', modifiedBy: 'Adminstrator MOD', addnew: '' },
//   { img: 'https://img.icons8.com/color/32/000000/ms-excel.png', name: 'RevenueByServices2016.xlsx', modified: 'A few seconds ago', modifiedBy: 'Adminstrator MOD', addnew: '' },
//   { img: 'https://img.icons8.com/color/32/000000/ms-excel.png', name: 'RevenueByServices2017.xlsx', modified: 'A few seconds ago', modifiedBy: 'Adminstrator MOD', addnew: '' }
// ];