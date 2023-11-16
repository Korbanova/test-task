import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../core/services";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit, OnDestroy {
    isLogIn: boolean = false;
    private subscription: Subscription | null = null;

    constructor(private authService: AuthService) {
        this.isLogIn = this.authService.getIsLoggedIn();
    }

    ngOnInit(): void {
        this.subscription = this.authService.isLogged$
            .subscribe((isLoggedIn: boolean) => {
                console.log(isLoggedIn)
                this.isLogIn = isLoggedIn;
            })
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
}
