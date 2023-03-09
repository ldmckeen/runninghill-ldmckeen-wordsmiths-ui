import { Component, Input, OnInit } from '@angular/core';
import { WordtypeService } from 'src/app/services/wordtype.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Wordtype } from 'src/app/models/wordtype.model';

@Component({
  selector: 'app-wordtype-details',
  templateUrl: './wordtype-details.component.html',
  styleUrls: ['./wordtype-details.component.css']
})
export class WordtypeDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentWordtype: Wordtype = {
    name: ''
  };

  message = '';

  constructor(
    private wordtypeService: WordtypeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getWordtype(this.route.snapshot.params["id"]);
    }
  }

  getWordtype(id: string): void {
    this.wordtypeService.get(id)
      .subscribe({
        next: (data) => {
          this.currentWordtype = data;
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
  //   this.wordtypeService.update(this.currentWordtype.id, data)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.currentWordtype.published = status;
  //         this.message = res.message ? res.message : 'The status was updated successfully!';
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

  updateWordType(): void {
    this.message = '';

    this.wordtypeService.update(this.currentWordtype.id, this.currentWordtype)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This wordtype was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteWordtype(): void {
    this.wordtypeService.delete(this.currentWordtype.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/wordtypes']);
        },
        error: (e) => console.error(e)
      });
  }


}
