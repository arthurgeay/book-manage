import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private bookService: BooksService, private router: Router) { }

  ngOnInit() {
    this.book = new Book('', '');
    const id = this.route.snapshot.params['id'];
    this.bookService.getSingleBook(+id).then(
      (book: Book) => this.book = book
    )
  }

  onBack() {
    this.router.navigate(['/books']);
  }

}
