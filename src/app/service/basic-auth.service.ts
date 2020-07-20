import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private http:HttpClient) { }




  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }




  executeAuthService(user, password) {
    let basicAuthenticationHeaderString = 'Basic ' + window.btoa(user + ':' + password);
  
    //let basicAuthHeaderString = this.createAuthenticationHttpHeader();
    let header = new HttpHeaders(
      {
        Authorization: basicAuthenticationHeaderString
      }
    )
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
    {headers:header}).pipe(
      map(
        data =>{
          sessionStorage.setItem('authenticaterUser',user);
          sessionStorage.setItem('token',basicAuthenticationHeaderString);
          return data;
        }
      )
    );
  }

  getAuthenticatedUser(){
   return sessionStorage.getItem('authenticaterUser');

  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem('token');
 
   }


   logout(){
    sessionStorage.removeItem('authenticaterUser');
    sessionStorage.removeItem('token');
   }
  createAuthenticationHttpHeader() {
    
  }

}

export class AuthenticationBean{
  constructor (public message:string){}
}
