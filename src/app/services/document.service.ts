import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Document } from '../models/document.model';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private serviceUrl = 'assets/sampleDocumentJson.json';
  documents: Document[];

  constructor(private http: HttpClient) { }

  getDocument(): Observable<Document[]> {
    return this.http.get<Document[]>(this.serviceUrl);
  }

  getDocumentById(id: number) {
    var documentObservable = this.getDocument();
    documentObservable.subscribe(documents=>this.documents=documents);
    documentObservable.subscribe(documents=>this.documents=documents);
    return (this.documents.find(document => document.id === id)); 
  }
}