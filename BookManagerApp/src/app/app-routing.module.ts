import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {path:'books', component: BookListComponent},
  {path: '', redirectTo: 'books', pathMatch:'full'},
  {path:'AddBook', component: CreateBookComponent},
  {path:'UpdateBook/:id', component: UpdateBookComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
