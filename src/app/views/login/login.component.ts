import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enum } from 'src/app/enum';
import { AuthService } from 'src/app/service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    private api: string = Enum.api;
    @ViewChild('loginFailed') loginFailed: any;

    //validation
    rememberMe: boolean = false;
    //validation
    
    //ngModel
    id: any;
    pw: any;
    modalComment: string;
    //ngModel

    constructor (private authService: AuthService, private http: HttpClient) { }

    ngOnInit() {
        this.getRemember();
    }

    //localstorage id,pw check-> checkbox true + this.id,this.pw set
    getRemember(): void {
        if (localStorage.getItem('id') && localStorage.getItem('pw')) {
            this.rememberMe = true;
            this.id = localStorage.getItem('id');
            this.pw = localStorage.getItem('pw');
        }
        else {
            this.rememberMe = false;
        }
    }

    //localstorage set id,pw (rememberMe클릭시)
    remember(): void {
        if (!this.rememberMe) {
            localStorage.clear();
        }
        else {
            localStorage.setItem('id', this.id);
            localStorage.setItem('pw', this.pw);
        }
    }

    // 로그인
    login(): void {
        if (this.id && this.pw) {
            let body = new FormData();
            body.append('id', this.id);
            body.append('pw', this.pw);

            this.http.post(`${this.api}/auth/login`, body)
                .subscribe(() => {
                    const user = { id: this.id, pw: this.pw };
                    this.remember();
                    this.authService.login(user);
                }, () => {
                    this.loginFailed.show();
                    this.modalComment = '아이디 또는 비밀번호를';
                })
        }
    }

}
