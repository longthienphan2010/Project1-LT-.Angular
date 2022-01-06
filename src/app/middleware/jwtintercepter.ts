import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class JwtInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentToken = localStorage.getItem("JWT_TOKEN_PROJECT");

        if (currentToken) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentToken}`,
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
                    'content-type': 'application/json'
                }
            });
        }

        return next.handle(req);
    }
}