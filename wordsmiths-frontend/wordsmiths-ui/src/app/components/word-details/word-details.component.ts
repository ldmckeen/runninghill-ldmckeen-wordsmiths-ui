import { Component, Input, OnInit } from '@angular/core';
import { WordService } from 'src/app/services/word.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Word } from 'src/app/models/word.model';

@Component({
  selector: 'app-word-details',
  templateUrl: './word-details.component.html',
  styleUrls: ['./word-details.component.css']
})

export class WordDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentWord: Word = {
    name: ''
  };

  message = '';

  constructor(
    private wordService: WordService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getWord(this.route.snapshot.params["id"]);
    }
  }

  getWord(id: string): void {
    this.wordService.get(id)
      .subscribe({
        next: (data) => {
          this.currentWord = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  // updatePublished(status: boolean): void {
  //   const data = {
  //     title: this.currentWordtype.name
  //   };
  //
  //   this.message = '';
  //
  //   this.wordService.update(this.currentWordtype.id, data)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.currentWordtype.published = status;
  //         this.message = res.message ? res.message : 'The status was updated successfully!';
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

  updateWord(): void {
    this.message = '';

    this.wordService.update(this.currentWord.id, this.currentWord)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This word was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteWord(): void {
    this.wordService.delete(this.currentWord.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/words']);
        },
        error: (e) => console.error(e)
      });
  }


}
