import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../core/auth.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent {

    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(
        private fb: FormBuilder,
        private as: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            userName: ['', Validators.required ],
            password: ['', Validators.required ]
        });
    }

    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('userName').value;

        this.as
            .authenticate(userName, password)
            .subscribe(
                () => this.router.navigate(['user', userName]),
                err => {
                    console.log(err);
                    this.loginForm.reset();
                    this.userNameInput.nativeElement.focus();
                    alert('Usuário ou Senha inválida');
                }
            );
    }

}