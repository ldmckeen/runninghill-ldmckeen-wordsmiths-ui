import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentencesListComponent } from './Sentence-list.component';

describe('SentencesListComponent', () => {
  let component: WordsListComponent;
  let fixture: ComponentFixture<WordsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
