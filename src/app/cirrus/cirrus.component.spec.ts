import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirrusComponent } from './cirrus.component';

describe('CirrusComponent', () => {
  let component: CirrusComponent;
  let fixture: ComponentFixture<CirrusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirrusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirrusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
