import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTwangComponent } from './ngx-twang.component';

describe('NgxTwangComponent', () => {
  let component: NgxTwangComponent;
  let fixture: ComponentFixture<NgxTwangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTwangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTwangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
