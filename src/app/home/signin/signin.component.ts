import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent {

    loginForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            userName: ['', Validators.required ],
            password: ['', Validators.required ]
        });
    }

}