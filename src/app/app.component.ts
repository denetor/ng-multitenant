import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './core/services/authentication.service';
import {User} from './features/auth/models/user';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'ng-multitenant';
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }


    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
