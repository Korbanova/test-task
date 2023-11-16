import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../core/services";
import {UserInfoType} from "../../../types/user-info.type";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {
    userInfo: UserInfoType | null = null;
    private subscription: Subscription | null = null;


    constructor(private authService: AuthService,
                private _snackBar: MatSnackBar,
                private router: Router) {
        if (this.authService.getIsLoggedIn()) {
            this.userInfo = this.authService.getUserInfo();
        }
    }

    ngOnInit(): void {
        this.subscription = this.authService.isLogged$
            .subscribe((isLoggedIn: boolean) => {
                this.userInfo = isLoggedIn ? this.authService.getUserInfo() : null;
            })
    }

    logout(): void {
        this.authService.removeUserInfo();
        this._snackBar.open('Вы вышли из сиситемы', "X", {"duration": 3000});
        this.router.navigate(['/']);
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }

}
