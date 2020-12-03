import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoutteComponent } from './goutte.component';

describe('GoutteComponent', () => {
  let component: GoutteComponent;
  let fixture: ComponentFixture<GoutteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoutteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoutteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
