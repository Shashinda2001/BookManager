import { Component,OnInit } from '@angular/core';
import {Book} from '../models/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  books : Book[] | undefined;

  constructor(private bookService : BookService ){}

  ngOnInit(): void {
 this.getBooks();
      
  }

  private getBooks() {
    this.bookService.getBooksList().subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        console.error('Error fetching books:', err);
      }
    });
  }
}
