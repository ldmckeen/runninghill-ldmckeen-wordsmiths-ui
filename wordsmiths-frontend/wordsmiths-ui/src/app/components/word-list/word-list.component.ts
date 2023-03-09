import { Component, OnInit } from '@angular/core';
import { Word } from 'src/app/models/word.model';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {

  words?: Word[];
  currentWord: Word = {};
  currentIndex = -1;
  title = '';

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.retrieveWords();
  }

  retrieveWords(): void {
    this.wordService.getAll()
      .subscribe({
        next: (data) => {
          this.words = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveWords();
    this.currentWord = {};
    this.currentIndex = -1;
  }

  setActiveWord(word: Word, index: number): void {
    this.currentWord = word;
    this.currentIndex = index;
  }

  removeAllWords(): void {
    this.wordService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentWord = {};
    this.currentIndex = -1;

    this.wordService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.words = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
