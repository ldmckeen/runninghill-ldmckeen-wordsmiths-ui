import { Component, OnInit } from '@angular/core';
import { Wordtype } from 'src/app/models/wordtype.model';
import { WordtypeService } from 'src/app/services/wordtype.service';

@Component({
  selector: 'app-add-wordtype',
  templateUrl: './add-wordtype.component.html',
  styleUrls: ['./add-wordtype.component.css']
})
export class AddWordtypeComponent implements OnInit {

  wordtype: Wordtype = {
    name: ''
  };
  submitted = false;

  constructor(private wordtypeService: WordtypeService) { }

  ngOnInit(): void {
  }

  saveWordtype(): void {
    const data = {
      title: this.wordtype.name
    };

    this.wordtypeService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newWordtype(): void {
    this.submitted = false;
    this.wordtype = {
      name: ''
    };
  }

}
