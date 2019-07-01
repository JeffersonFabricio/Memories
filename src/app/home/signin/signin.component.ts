import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../core/auth.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent {

    loginForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private as: AuthService
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
                () => console.log('autenticado'),
                err => {
                    console.log(err);
                    this.loginForm.reset();
                    alert('Usuário ou Senha inválida');
                }
            );
    }

}