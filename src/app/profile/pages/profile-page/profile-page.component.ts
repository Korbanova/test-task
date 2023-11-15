import {Component, OnInit} from '@angular/core';
import {MatSnackBar, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {UserInfoResponseType} from "../../../../types/user-info-response.type";
import {DefaultResponseType} from "../../../../types/default-response.type";

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.less']
})
export class ProfilePageComponent implements OnInit {
    userInfoForm = this.fb.group({
        firstName: ['', [Validators.required, Validators.pattern(/^[A-zА-я\-0-9]{1,255}$/)]],
        lastName: ['', [Validators.required, Validators.pattern(/^[A-zА-я\-0-9]{1,255}$/)]],
        email: [''],
        phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
        webSiteURL: ['', [Validators.pattern(/^((http|https|ftp):\/\/)?(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)/i)]],
    })
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    constructor(private fb: FormBuilder,
                private userService: UserService,
                private _snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
        this.userService.getUserInfo()
            .subscribe((data: UserInfoResponseType | DefaultResponseType) => {
                if ((data as DefaultResponseType).error !== undefined) {
                    throw new Error((data as DefaultResponseType).message);
                }

                const userInfo = data as UserInfoResponseType;

                const paramsToUpdate = {
                    firstName: userInfo.firstName ? userInfo.firstName : '',
                    lastName: userInfo.lastName ? userInfo.lastName : '',
                    phone: userInfo.phone ? userInfo.phone : '',
                    email: userInfo.email ? userInfo.email : '',
                    webSiteURL: userInfo.webSiteURL ? userInfo.webSiteURL : ''
                };

                this.userInfoForm.setValue(paramsToUpdate);

            })
    }

    updateUserInfo() {
        console.log('updateUserInfo');
        if (this.userInfoForm.valid) {
            const paramObject: UserInfoResponseType = {
                email: this.userInfoForm.value.email ? this.userInfoForm.value.email : '',
                firstName: this.userInfoForm.value.firstName ? this.userInfoForm.value.firstName : '',
                lastName: this.userInfoForm.value.lastName ? this.userInfoForm.value.lastName : '',
                phone: this.userInfoForm.value.phone ? this.userInfoForm.value.phone : '',
            }

            if (this.userInfoForm.value.webSiteURL) {
                paramObject.webSiteURL = this.userInfoForm.value.webSiteURL;
            }

            this.userService.updateUserInfo(paramObject)
                .subscribe({
                    next: (data: DefaultResponseType) => {
                        if (data.error) {
                            this._snackBar.open(data.message, "X", {
                                verticalPosition: this.verticalPosition,
                            });
                            throw new Error(data.message);
                        }

                        this._snackBar.open('Данные успешно сохранены', "X", {
                            "duration": 3000,
                            verticalPosition: this.verticalPosition,
                        });
                        this.userInfoForm.markAsPristine();
                    },
                    error: (errorResponse: DefaultResponseType) => {
                        if (errorResponse.error && errorResponse.message) {
                            this._snackBar.open(errorResponse.message);
                        } else {
                            this._snackBar.open('Ошибка сохранения', "X",
                                {
                                    verticalPosition: this.verticalPosition,
                                });
                        }
                    }
                })
        }
    }
}
