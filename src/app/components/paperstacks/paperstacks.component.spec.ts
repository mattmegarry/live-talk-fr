import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperstacksComponent } from './paperstacks.component';

describe('PaperstacksComponent', () => {
  let component: PaperstacksComponent;
  let fixture: ComponentFixture<PaperstacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperstacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperstacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
