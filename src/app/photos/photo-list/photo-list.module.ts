import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoModule } from './../photo/photo.module';
import { CardModule } from '../../shared/components/card/card.module';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';

import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { SearchComponent } from './search/search.component';
import { FilterByDescription } from './filter-by-description.pipe';

@NgModule({ 
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
    ],
    imports: [ 
        CommonModule,
        PhotoModule,
        CardModule,
        DarkenOnHoverModule
    ]
})
export class PhotoListModule { }