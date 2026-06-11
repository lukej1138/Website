import { Component, signal } from '@angular/core';
import { Contact } from './contact/contact';
import { Hero } from './hero/hero';
import { Navbar } from './navbar/navbar';
import { Projects } from './projects/projects';
import { Synopsis } from './synopsis/synopsis';
import { Socials } from './socials/socials';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Navbar, Hero, Contact, Projects, Synopsis, Socials]
})
export class App {
  protected readonly title = signal('LJWeb2.0');
}
