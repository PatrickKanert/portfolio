import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOverlayCardComponent } from './project-overlay-card.component';

describe('ProjectOverlayCardComponent', () => {
  let component: ProjectOverlayCardComponent;
  let fixture: ComponentFixture<ProjectOverlayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectOverlayCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectOverlayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
