import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDDATEComponent } from './crud-date.component';

describe('CRUDDATEComponent', () => {
  let component: CRUDDATEComponent;
  let fixture: ComponentFixture<CRUDDATEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUDDATEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRUDDATEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
