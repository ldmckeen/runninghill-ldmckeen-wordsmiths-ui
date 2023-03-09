import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordtypeDetailsComponent } from './wordtype-details.component';

describe('WordtypeDetailsComponent', () => {
  let component: WordtypeDetailsComponent;
  let fixture: ComponentFixture<WordtypeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordtypeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordtypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
