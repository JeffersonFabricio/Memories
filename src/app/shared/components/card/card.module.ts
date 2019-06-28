import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.components';

@NgModule({
    declarations: [ CardComponent ],
    imports: [ CommonModule ],
    exports: [ CardComponent ]
})
export class CardModule { }
