import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeConfirmDialogComponent } from './type-confirm-dialog.component';

describe('TypeConfirmDialogComponent', () => {
  let component: TypeConfirmDialogComponent;
  let fixture: ComponentFixture<TypeConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
