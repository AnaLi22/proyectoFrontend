import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const userName : string = environment.authUser;
        const password : string = environment.authPass;

        const authHeader = 'Basic ' + btoa(`${userName}:${password}`);

        const cloned = req.clone({
            setHeaders: {
                Authorization: authHeader
            },
            //withCredentials: true
        });

        return next.handle(cloned);
    }
}