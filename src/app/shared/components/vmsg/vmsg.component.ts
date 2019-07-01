import { Component, Input } from '@angular/core';

@Component({
    selector: 'm-vmsg',
    templateUrl: './vmsg.component.html'
})
export class VMsgComponent {

    @Input() text = '';

 }