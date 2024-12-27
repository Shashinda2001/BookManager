export class Book {

    id: number;
    title: string;
    author: string;
    isbn: string;
    publicationDate: Date;

    constructor(id: number, title: string, author: string, isbn: string, publicationDate: Date) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.publicationDate = publicationDate;
    }
}
