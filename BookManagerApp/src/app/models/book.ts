export class Book {

    id: number;
    title: string;
    author: string;
    isbn: string;
    publicationDate: Date;

    constructor( id: number = 0,
    title: string = '',
    author: string = '',
    isbn: string = '',
    publicationDate: Date = new Date()) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.publicationDate = publicationDate;
    }

    
}
