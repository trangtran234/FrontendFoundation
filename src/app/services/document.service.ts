import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Document } from '../models/document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private serviceUrl = 'assets/sampleDocumentJson.json';

  constructor(private http: HttpClient) { }

  getDocument(): Observable<Document[]> {
    return this.http.get<Document[]>(this.serviceUrl);
  }
}