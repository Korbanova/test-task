import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../core/services";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
    isLogIn: boolean = false;

    constructor(private authService: AuthService) {
        this.isLogIn = this.authService.getIsLoggedIn();
    }

    ngOnInit(): void {
        this.authService.isLogged$
            .subscribe((isLoggedIn: boolean) => {
                console.log(isLoggedIn)
                this.isLogIn = isLoggedIn;
            })
    }
}
