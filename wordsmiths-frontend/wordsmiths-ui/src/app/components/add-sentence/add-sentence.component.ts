import { Component, OnInit } from '@angular/core';
import { Sentence } from 'src/app/models/sentence.model';
import { SentenceService } from 'src/app/services/sentence.service';

@Component({
  selector: 'app-add-sentence',
  templateUrl: './add-sentence.component.html',
  styleUrls: ['./add-sentence.component.css']
})
export class AddSentenceComponent implements OnInit {

  sentence: Sentence = {
    text: ''
  };
  submitted = false;

  constructor(private sentenceService: SentenceService) { }

  ngOnInit(): void {
  }

  saveSentence(): void {
    const data = {
      title: this.sentence.text
    };

    this.sentenceService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newSentence(): void {
    this.submitted = false;
    this.sentence = {
      text: ''
    };
  }

}
