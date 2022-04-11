import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutuberDetailComponent } from './youtuber-detail.component';

describe('YoutuberDetailComponent', () => {
  let component: YoutuberDetailComponent;
  let fixture: ComponentFixture<YoutuberDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutuberDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutuberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
