import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {ReplaySubject, takeUntil} from "rxjs";
import {DefaultResponseType} from "../../../../types/default-response.type";
import {AuthService} from "../../../../core/services";
import {LoginResponseType} from "../../../../types/login-response.type";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnDestroy {
    loginForm = this.fb.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required]]
    });
    onDestroy = new ReplaySubject(1);

    constructor(private fb: FormBuilder,
                private authService: AuthService,
                private _snackBar: MatSnackBar,
                private router: Router) {
    }

    login(): void {
        if (this.loginForm.valid && this.loginForm.value.email && this.loginForm.value.password) {
            this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
                .pipe(takeUntil(this.onDestroy))
                .subscribe({
                    next: (data: LoginResponseType | DefaultResponseType) => {
                        let error = null;
                        if ((data as DefaultResponseType).error !== undefined) {
                            error = (data as DefaultResponseType).message;
                            this._snackBar.open(error, "X");
                            throw new Error(error);
                        }
                        const loginResponse = data as LoginResponseType;

                        this.authService.setUserInfoInStorage({
                            userName: loginResponse.userInfo.userName,
                            userLastName: loginResponse.userInfo.userLastName,
                            userRole: loginResponse.userInfo.userRole
                        })
                        this._snackBar.open('Вы успешно авторизовались', "X", {"duration": 3000});
                        this.router.navigate(['/']);
                    },
                    error: (errorResponse: HttpErrorResponse) => {
                        if (errorResponse.error && errorResponse.error.message) {
                            this._snackBar.open(errorResponse.error.message, "X");
                        } else {
                            this._snackBar.open('Ошибка при авторизации', "X", {"duration": 3000});
                        }
                    }
                })
        }
    }

    ngOnDestroy() {
        this.onDestroy.next(1);
        this.onDestroy.complete();
    }
}
