import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage'
import { Http, Headers, URLSearchParams } from '@angular/http'

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

    register(firstName: string, lastName: string, email: string, password: string) {
        var loginData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        return this.post('/api/authentication/register', loginData)
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

    logout() {
        this.localStorage.remove('token')
    }

    get(url: string, params: URLSearchParams = null) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers,
            params: params
        });
    }

    post(url: string, data) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        })
    }

    put(url: string, data) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.put(url, data, {
            headers: headers
        })
    }

    // internal methods

    private createAuthorizationHeader(headers: Headers) {
        var tokenObj = this.localStorage.get('token')
        if (tokenObj != null) {
            headers.append('token', tokenObj.toString())
        }
    }
}