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
            let contentType = 'application/json';

            if (String(request.headers.get('Intercept')).includes('false')) {
                request = request.clone({                    
                    setHeaders: {
                        Authorization: `Bearer ${currentUser.token}`,
                    }
                }); 
            } else if (!request.headers.get('Content-Type')) {
                request = request.clone({                    
                    setHeaders: {
                        'Content-Type': contentType,
                        Authorization: `Bearer ${currentUser.token}`,
                    }
                });                    
            }
        }

        return next.handle(request);
    }
}
