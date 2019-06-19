import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutliChoiceComponent } from './mutli-choice.component';

describe('MutliChoiceComponent', () => {
  let component: MutliChoiceComponent;
  let fixture: ComponentFixture<MutliChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutliChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutliChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
