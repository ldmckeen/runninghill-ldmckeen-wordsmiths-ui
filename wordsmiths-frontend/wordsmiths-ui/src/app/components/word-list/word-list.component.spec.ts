import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsListComponent } from './word-list.component';

describe('WordsListComponent', () => {
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
