import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from 'src/app/services/document.service';
import { Document } from '../../models/document.model';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.less']
})
export class DocumentDetailComponent implements OnInit {
  document: Document;

  constructor(
    private route : ActivatedRoute,
    private documentService: DocumentService
  ) { }

  ngOnInit() {
    this.getDocumentById();
  }

  getDocumentById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.documentService.getDocumentById(id);
  }

}
