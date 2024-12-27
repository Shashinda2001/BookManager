import { Component,OnInit } from '@angular/core';
import {Book} from '../models/book';
import { BookService } from '../service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  books : Book[] | undefined;

  constructor(private bookService : BookService , private router : Router){}

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

  updateBook(id: number){
    this.router.navigate(['UpdateBook',id]);
  }

  deleteBook(id:number){
    const confirmed = confirm('Are you sure you want to delete this book?');
    if(confirmed){
      this.bookService.deleteBook(id).subscribe(data=>{
        this.getBooks();
      })
    }
    
  }

  viewBook(id:number){
    this.router.navigate(['bookInfo',id]);
  }
}
