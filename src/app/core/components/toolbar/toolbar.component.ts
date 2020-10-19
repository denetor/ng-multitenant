import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '@app/core/services/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {
    public currentUser = null;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }


    ngOnInit(): void {
        this.authenticationService.currentUser.subscribe(
            user => {
                this.currentUser = user;
            }
        );
    }


    logout(): void {
        this.authenticationService.logout();
        this.router.navigate(['/auth/login']);
    }

}
