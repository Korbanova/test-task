import {Injectable} from '@angular/core'
import {DefaultResponseType} from "../../types/default-response.type";
import {LoginResponseType} from "../../types/login-response.type";
import {Observable, Subject} from "rxjs";
import {UserInfoType} from "../../types/user-info.type";

@Injectable({providedIn: 'root'})
export class AuthService {
    private userInfoKey: string = 'userInfo';

    public isLogged$: Subject<boolean> = new Subject<boolean>();
    private isLogged = false;

    constructor() {
        this.isLogged = !!localStorage.getItem(this.userInfoKey)
    }

    public login(email: string, password: string): Observable<DefaultResponseType | LoginResponseType> {

        if(email === 'test@test'){
            return new Observable(observer => {
                observer.next({
                    error: true,
                    message: 'Получена ошибка'
                })
            })
        }
        if(email === 'test2@test'){
            return new Observable(observer => {
                observer.error({
                    error: true,
                    message: 'Получена ошибка2'
                })
            })
        }
        return new Observable(observer => {
            observer.next({
                userInfo: {
                    userName: 'Kate',
                    userLastName: 'Petrova',
                    userRole: 'user'
                }
            })
        })
    }

    getIsLoggedIn() {
        return this.isLogged;
    }

    public setUserInfoInStorage(info: UserInfoType): void {
        localStorage.setItem(this.userInfoKey, JSON.stringify(info));
        this.isLogged = true;
        this.isLogged$.next(true);
    }

    public removeUserInfo(): void {
        localStorage.removeItem(this.userInfoKey);
        this.isLogged = false;
        this.isLogged$.next(false);
    }

    public getUserInfo(): UserInfoType | null {
        const userinfo: string | null = localStorage.getItem(this.userInfoKey);
        if (userinfo) {
            return JSON.parse(userinfo);
        }
        return null;
    }

    public logout() {
    }
}
