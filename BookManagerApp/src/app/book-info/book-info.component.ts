import { Component ,OnInit} from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../service/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrl: './book-info.component.css'
})
export class BookInfoComponent implements OnInit {

  id : number =-1;
  book : Book =new Book();

  constructor(private bookService : BookService ,
    private route : ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'] ;
     this.bookService.getBookById(this.id).subscribe(data=>{
      this.book=data;
     },
    error=> console.log(error));
  }
}
