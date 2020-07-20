import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: string) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) {


  }

  executeHelloWroldService() {
    //console.log("before service");

    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders(
    //   {
    //     Authorization: basicAuthHeaderString
    //   }
    // )
    return this.http.get<HelloWorldBean>('http://localhost:8080/helloBean'
    //{headers:header}
    );
  }

  executeHelloWroldServiceWithParameter(name) {
    //console.log("before service");
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders(
    //   {
    //     Authorization: basicAuthHeaderString
    //   }
    // )
    return this.http.get<HelloWorldBean>(`http://localhost:8080/helloBean/${name}`,
    //{headers:header}
    );
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'mahmoud';
  //   let password = 'dummy';
  //   let basicAuthenticationHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthenticationHeaderString;
  // }

}
