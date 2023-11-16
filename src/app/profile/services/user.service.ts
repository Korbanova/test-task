import {Injectable} from '@angular/core';
import {DefaultResponseType} from "../../../types/default-response.type";
import {Observable} from "rxjs";
import {UserInfoResponseType} from "../../../types/user-info-response.type";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor() {}

    updateUserInfo(params: UserInfoResponseType): Observable<DefaultResponseType> {
        if (params.firstName === 'Katee') {
            return new Observable(observer => {
                observer.next({
                    error: true,
                    message: 'Получена ошибка'
                })
            })
        }
        return new Observable(observer => {
            observer.next({
                error: false,
                message: 'Вск ок'
            })
        })
    }

    getUserInfo(): Observable<UserInfoResponseType | DefaultResponseType> {
        return new Observable(observer => {
            observer.next({
                firstName: 'Kate',
                lastName: 'Petrova',
                phone: '9137053423',
                email: 'test34@test',
                // webSiteURL: 'http://dfdf.com'
            })
        })
    }
}
