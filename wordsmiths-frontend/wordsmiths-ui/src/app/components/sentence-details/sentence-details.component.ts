import { Component, Input, OnInit } from '@angular/core';
import { SentenceService } from 'src/app/services/sentence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sentence } from 'src/app/models/sentence.model';

@Component({
  selector: 'app-sentence-details',
  templateUrl: './sentence-details.component.html',
  styleUrls: ['./sentence-details.component.css']
})

export class SentenceDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentSentence: Sentence = {
    text: ''
  };

  message = '';

  constructor(
    private sentenceService: SentenceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getSentence(this.route.snapshot.params["id"]);
    }
  }

  getSentence(id: string): void {
    this.sentenceService.get(id)
      .subscribe({
        next: (data) => {
          this.currentSentence = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  // updatePublished(status: boolean): void {
  //   const data = {
  //     title: this.currentSentence.text
  //   };
  //
  //   this.message = '';
  //
  //   this.sentenceService.update(this.currentSentence.id, data)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.currentSentence.published = status;
  //         this.message = res.message ? res.message : 'The status was updated successfully!';
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

  updateSentence(): void {
    this.message = '';

    this.sentenceService.update(this.currentSentence.id, this.currentSentence)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This sentence was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteSentence(): void {
    this.sentenceService.delete(this.currentSentence.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/sentences']);
        },
        error: (e) => console.error(e)
      });
  }


}
