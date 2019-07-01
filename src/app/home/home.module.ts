import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { VMsgModule } from './../shared/components/vmsg/vmsg.module';
import { SignInComponent } from './signin/signin.component';

@NgModule({
    declarations: [ SignInComponent ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMsgModule
    ]
})
export class HomeModule { }