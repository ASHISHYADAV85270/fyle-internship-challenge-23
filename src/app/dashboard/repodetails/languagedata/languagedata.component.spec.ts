import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagedataComponent } from './languagedata.component';

describe('LanguagedataComponent', () => {
  let component: LanguagedataComponent;
  let fixture: ComponentFixture<LanguagedataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguagedataComponent]
    });
    fixture = TestBed.createComponent(LanguagedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
