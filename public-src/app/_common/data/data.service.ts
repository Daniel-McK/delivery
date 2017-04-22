import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage'
import { Http, Headers } from '@angular/http'

@Injectable()
export class DataService {

    constructor(private http: Http, private localStorage: LocalStorageService) { }

    login(email: string, password: string) {
        var loginData = {
            email: email,
            password: password
        }
        return this.post('/api/authentication/login', loginData)
            .map(response => {
                var body = response.json()
                if (body.success) {
                    this.localStorage.set('token', body.token)
                }
                return body
            })
    }

    verifyToken(){
        return this.get('/api/authentication/verify-token')
    }

    // internal methods

    private get(url: string) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    }

    private post(url: string, data) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        })
    }

    private createAuthorizationHeader(headers: Headers) {
        var tokenObj = this.localStorage.get('token')
        if (tokenObj != null) {
            headers.append('token', tokenObj.toString())
        }
    }
}