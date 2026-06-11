import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInfoPopup } from './project-info-popup';

describe('ProjectInfoPopup', () => {
  let component: ProjectInfoPopup;
  let fixture: ComponentFixture<ProjectInfoPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectInfoPopup],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectInfoPopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
