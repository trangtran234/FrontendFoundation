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
  dataSource = new DocumentDataSource(this.documentService);
  displayedColumns: string[] = ['checkedState', 'imagePath', 'name', 'modified', 'modifiedBy'];

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
  }

  onClick() {
    console.log("Make sure you want to choose the record?");
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