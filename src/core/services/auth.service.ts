import {Injectable} from '@angular/core'
import {DefaultResponseType} from "../../types/default-response.type";
import {LoginResponseType} from "../../types/login-response.type";
import {Observable, Subject} from "rxjs";

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
        return new Observable(observer => {
            observer.next({
                userInfo: {
                    userName: 'Kate',
                    userLastName: 'Petrova',
                    userRole: 'user'
                }
            })
        })
        // return this.http.post<DefaultResponseType | LoginResponseType>('environment.api' + 'login', {
        //     email,
        //     password
        // })
    }

    getIsLoggedIn() {
        return this.isLogged;
    }

    public setUserInfoInStorage(info: {userName: string, userLastName: string, userRole: string}): void {
        localStorage.setItem(this.userInfoKey, JSON.stringify(info));
        this.isLogged = true;
        this.isLogged$.next(true);
    }

    public removeUserInfo(): void {
        localStorage.removeItem(this.userInfoKey);
    }

    public getUserInfo(): LoginResponseType | null {
        const userinfo: string | null = localStorage.getItem(this.userInfoKey);
        if (userinfo) {
            return JSON.parse(userinfo);
        }
        return null;
    }

    public logout() {
    }
}
