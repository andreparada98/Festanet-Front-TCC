import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser = JSON.parse(localStorage.getItem('user'))
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${currentUser.token}`,
                    'License-Type': 'APP_WEB'
                }
            });
        }

        return next.handle(request);
    }
}
