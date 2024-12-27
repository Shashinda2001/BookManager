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

  //GET/BOOK/ID
  getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.baseURL}/${id}`);
  }

  //POST/BOOK
  addBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(`${this.baseURL}`, book);
  }
  
  //UPDATE/BOOK
  updateBook(id: number, book: Book): Observable<void> {
    return this.httpClient.put<void>(`${this.baseURL}/${id}`, book);
  }

  //DELETE/BOOK
  deleteBook(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/${id}`);
  }
  
  
  
  
}
