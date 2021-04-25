import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentsDetailComponent } from './establishments-detail.component';

describe('EstablishmentsDetailComponent', () => {
  let component: EstablishmentsDetailComponent;
  let fixture: ComponentFixture<EstablishmentsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishmentsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
