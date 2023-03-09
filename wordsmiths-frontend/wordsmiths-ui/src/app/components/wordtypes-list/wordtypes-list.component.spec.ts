import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordtypesListComponent } from './wordtype-list.component';

describe('WordtypesListComponent', () => {
  let component: WordtypesListComponent;
  let fixture: ComponentFixture<WordtypesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordtypesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordtypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
