import { Component, Input } from '@angular/core';

@Component({
  selector: 'm-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() title: string = '';
}
