import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseURL ="http://localhost:5119/api/Book";
  constructor(private httpClient : HttpClient) { }

  // GET/BOOKS
  getBooksList(): Observable <Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}`);
  }
}
