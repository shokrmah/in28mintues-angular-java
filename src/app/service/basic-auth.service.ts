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


//{"token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYWhtb3VkIiwiZXhwIjoxNTk1ODUyMjQ2LCJpYXQiOjE1OTUyNDc0NDZ9.tlbZIh5QOHZG3e-oz8-q_wVtMSC-7Mp0N_psV7rWa7wy_00DJhZJPmn_iu1KQLt12CHfDLJW0jTJegIqDtWzZg"}

executeJwtService(user, password) {

  console.log("loginnig");
  
  return this.http.post<any>(`${API_URL}/authenticate`,
  {
    user,
    password
  }).pipe(
    map(
      data =>{
        sessionStorage.setItem('authenticaterUser',user);
        sessionStorage.setItem('token',`Bearer ${data.token}`);
        return data;
      }
    )
  );
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
