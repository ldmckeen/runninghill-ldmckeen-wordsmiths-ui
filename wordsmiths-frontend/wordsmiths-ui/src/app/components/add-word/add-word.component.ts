import { Component, OnInit } from '@angular/core';
import { Word } from 'src/app/models/word.model';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent implements OnInit {

  word: Word = {
    name: ''
  };
  submitted = false;

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
  }

  saveWord(): void {
    const data = {
      title: this.word.name
    };

    this.wordService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newWord(): void {
    this.submitted = false;
    this.word = {
      name: ''
    };
  }

}
