import { Component, inject } from '@angular/core';
import {MatDialogModule, MatDialogContent } from '@angular/material/dialog';
import { PROJECT_INFO_DATA } from '../token';

@Component({
  selector: 'app-project-info-popup',
  imports: [MatDialogModule, MatDialogContent],
  templateUrl: './project-info-popup.html',
  styleUrl: './project-info-popup.css',
})
export class ProjectInfoPopup {
  container = inject(PROJECT_INFO_DATA);
  dataToUse = this.container.sectionData;
}
