import { Component, Input } from '@angular/core';

@Component({
  selector: 'm-card',
  templateUrl: './card.components.html'
})
export class CardComponent {
    @Input() title: string = '';
 }
