import { Component, OnInit } from '@angular/core';
import { Wordtype } from 'src/app/models/wordtype.model';
import { WordtypeService } from 'src/app/services/wordtype.service';

@Component({
  selector: 'app-wordtypes-list',
  templateUrl: './wordtypes-list.component.html',
  styleUrls: ['./wordtypes-list.component.css']
})
export class WordtypesListComponent implements OnInit {

  wordtypes?: Wordtype[];
  currentWordtype: Wordtype = {};
  currentIndex = -1;
  title = '';

  constructor(private wordTypeService: WordtypeService) { }

  ngOnInit(): void {
    this.retrieveWordtypes();
  }

  retrieveWordtypes(): void {
    this.wordTypeService.getAll()
      .subscribe({
        next: (data) => {
          this.wordtypes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveWordtypes();
    this.currentWordtype = {};
    this.currentIndex = -1;
  }

  setActiveWordtype(wordtype: Wordtype, index: number): void {
    this.currentWordtype = wordtype;
    this.currentIndex = index;
  }

  removeAllWordtypes(): void {
    this.wordTypeService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentWordtype = {};
    this.currentIndex = -1;

    this.wordTypeService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.wordtypes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
