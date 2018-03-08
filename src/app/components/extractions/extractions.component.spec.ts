import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractionsComponent } from './extractions.component';

describe('ExtractionsComponent', () => {
  let component: ExtractionsComponent;
  let fixture: ComponentFixture<ExtractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
