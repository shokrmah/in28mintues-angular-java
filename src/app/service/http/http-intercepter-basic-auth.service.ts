import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthService } from '../basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthService: BasicAuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {


    //   let basicAuthenticationHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let basicHeaderString =  this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();


    if( basicHeaderString && username){
      request = request.clone({
        setHeaders: {
          Authorization: basicHeaderString
        }
      })  
    }
   
    return next.handle(request);
  }

}
