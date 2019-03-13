import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    constructor (private router: Router) { }

    login(user: any): void {
        if (user !== undefined) {
            try {
                this.loggedIn.next(true);
                this.router.navigate(['users/member']);
            } catch (error) {
                console.log(error);
            }
        }
    }

    logout(): void {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    }
}
