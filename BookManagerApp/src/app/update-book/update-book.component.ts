import { Component,OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import {Book} from '../models/book'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent implements OnInit {

  book :Book = new Book();
  id:number = -1;

  constructor(private bookService :BookService,
    private route : ActivatedRoute,
    private router : Router
  ){

  }
  ngOnInit(): void {
     this.id=this.route.snapshot.params['id'] ;
     this.bookService.getBookById(this.id).subscribe(data=>{
      this.book=data;
     },
    error=> console.log(error));
  }

  goToBookList(){
    this.router.navigate(['/books']);
  }

  onSubmit(){
    this.bookService.updateBook(this.id,this.book).subscribe(data=>{
     this. goToBookList();
    },
    error => console.log(error)
  );
  }

  

}
