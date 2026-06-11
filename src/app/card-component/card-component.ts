import { Component, computed, inject, Input, OnInit, signal } from '@angular/core';
import { CardInteractionService, InfoCard } from '../card-interaction-service'
import { CdkDrag } from '@angular/cdk/drag-drop'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
@Component({
  selector: 'app-card-component',
  imports: [CdkDrag],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css',
  host: {
    '(document:mouseup)' : 'test($event)',
    '[style.z-index]'    : 'zVal',
  }
})
export class CardComponent implements OnInit {
  @Input({required : true}) cardData !: InfoCard;
  @Input({required : false}) parentName !: string;
  observerTs = inject(BreakpointObserver);
  cardService = inject(CardInteractionService);
  posToUse !: {x: number, y: number};
  zVal: number = 0;

  constructor() {
    if (!this.parentName) {
      this.parentName = "";
    }
  }

  ngOnInit(): void {
    this.observerTs.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe((size) => {
      if (size.breakpoints[Breakpoints.XSmall]) {
        this.posToUse = {x: this.cardData.positions.phone.x, y: this.cardData.positions.phone.y};
        this.zVal = this.cardData.positions.phone.z;
      }
      else if (size.breakpoints[Breakpoints.Small]) {
        this.posToUse = {x: this.cardData.positions.tablet.x, y: this.cardData.positions.tablet.y};
        this.zVal = this.cardData.positions.tablet.z;
      }
      else {
        this.posToUse = {x: this.cardData.positions.desktop.x, y: this.cardData.positions.desktop.y};
        this.zVal = this.cardData.positions.desktop.z;
      }
    })
  }
  isFlipped = signal<boolean>(false);
  rotate = signal<boolean>(false);
  toggleFlip() {this.isFlipped.update((value) => !value);}

  test(event: MouseEvent) {this.rotate.set(false);}

  onMouseDown() {
    this.rotate.set(true);
    this.cardService.highestZ++;
    this.zVal = this.cardService.highestZ;
  }
}
