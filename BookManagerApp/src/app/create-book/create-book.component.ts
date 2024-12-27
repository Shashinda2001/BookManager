import { Component ,OnInit} from '@angular/core';
import {Book} from '../models/book';
import { BookService } from '../service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent implements OnInit {

  book: Book = new Book(); 
  ngOnInit(): void {
      
  }
  constructor(private bookService: BookService ,
    private router : Router
  ){}

  addBook(){
    this.bookService.addBook(this.book).subscribe(data=>{
      console.log(data);
      this.goToBookList();
    },
  error => console.log(error));
  
  }

  goToBookList(){
    this.router.navigate(['/books']);
  }


  onSubmit(){
    
   this. addBook();
  
  }

}
