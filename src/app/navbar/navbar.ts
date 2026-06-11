import { Component, signal, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnDestroy, OnInit {
  private mq = window.matchMedia('(min-width: 768px)');
  private mqhandler= (e: MediaQueryListEvent)=> {
    if (e.matches){
      this.isOpen.set(false);
    }
  }

  isOpen = signal(false);

  toggleMenu() : void {
     this.isOpen.set(!this.isOpen());
  }

  ngOnInit(): void {
    this.mq.addEventListener('change', this.mqhandler);
  }
  ngOnDestroy(): void {
    this.mq.removeEventListener('change', this.mqhandler);
  }

}
