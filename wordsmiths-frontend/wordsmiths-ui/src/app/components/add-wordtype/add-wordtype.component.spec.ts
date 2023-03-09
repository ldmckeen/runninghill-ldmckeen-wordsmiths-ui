import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWordtypeComponent } from './add-wordtype.component';

describe('AddWordtypeComponent', () => {
  let component: AddWordtypeComponent;
  let fixture: ComponentFixture<AddWordtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWordtypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWordtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
