import { Component,OnInit } from '@angular/core';
import {Book} from '../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  books : Book[] | undefined;

  constructor(){}

  ngOnInit(): void {

    this.books = [
      {
        id:12,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        isbn: '978-1234567890',
        publicationDate: new Date('1925-04-10') // Convert the string to a Date object
      },
      {
        id:13,
        title: '1984',
        author: 'George Orwell',
        isbn: '978-0451524935',
        publicationDate: new Date('1949-06-08') // Another example with a Date
      }
    ];
      
  }
}
