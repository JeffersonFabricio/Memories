import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { VMsgModule } from '../shared/components/vmsg/vmsg.module';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup/signup.component';

@NgModule({
    declarations: [ SignInComponent, SignUpComponent ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VMsgModule,
        RouterModule
    ]
})
export class HomeModule { }