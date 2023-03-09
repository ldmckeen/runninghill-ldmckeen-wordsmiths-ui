import { Component, OnInit } from '@angular/core';
import { Sentence } from 'src/app/models/sentence.model';
import { SentenceService } from 'src/app/services/sentence.service';

@Component({
  selector: 'app-sentence-list',
  templateUrl: './sentence-list.component.html',
  styleUrls: ['./sentence-list.component.css']
})
export class SentenceListComponent implements OnInit {

  sentences?: Sentence[];
  currentSentence: Sentence = {};
  currentIndex = -1;
  title = '';

  constructor(private sentenceService: SentenceService) { }

  ngOnInit(): void {
    this.retrieveSentences();
  }

  retrieveSentences(): void {
    this.sentenceService.getAll()
      .subscribe({
        next: (data) => {
          this.sentences = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveSentences();
    this.currentSentence = {};
    this.currentIndex = -1;
  }

  setActiveSentence(sentence: Sentence, index: number): void {
    this.currentSentence = sentence;
    this.currentIndex = index;
  }

  removeAllSentences(): void {
    this.sentenceService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentSentence = {};
    this.currentIndex = -1;

    this.sentenceService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.sentences = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
