import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProdShowcaseComponent } from './home-prod-showcase.component';

describe('HomeProdShowcaseComponent', () => {
  let component: HomeProdShowcaseComponent;
  let fixture: ComponentFixture<HomeProdShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProdShowcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProdShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
