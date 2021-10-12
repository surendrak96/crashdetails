import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashDetailsComponent } from './crash-details.component';

describe('CrashDetailsComponent', () => {
  let component: CrashDetailsComponent;
  let fixture: ComponentFixture<CrashDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrashDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrashDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
