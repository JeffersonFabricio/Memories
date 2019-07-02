import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component ({
    selector: 'm-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    user$: Observable<User>;

    constructor(userService: UserService) {
        this.user$ = userService.getUser();
    }
}