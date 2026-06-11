import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { simpleInstagram, simpleGithub} from '@ng-icons/simple-icons';

@Component({
  selector: 'app-socials',
  imports: [NgIcon],
  templateUrl: './socials.html',
  styleUrl: './socials.css',
  providers: [
    provideIcons({ simpleInstagram, simpleGithub})
  ]
})
export class Socials {}
