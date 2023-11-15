import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../services";
import {MatSnackBar, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    constructor(private authService: AuthService,
                private _snackBar: MatSnackBar,
                private router: Router) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const isLoggedIn = this.authService.getIsLoggedIn();
        if (!isLoggedIn) {
            this._snackBar.open('Для доступа необходимо авторизоваться',"X", {
                "duration": 3000,
                verticalPosition: this.verticalPosition,
            });
            this.router.navigate(['/login']);

        }
        return isLoggedIn;

    }

}
