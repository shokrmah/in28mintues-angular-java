import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean{
  constructor(public message:string){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { 


  }

  executeHelloWroldService(){
    //console.log("before service");
    return this.http.get<HelloWorldBean>('http://localhost:8080/helloBean');
  }

  executeHelloWroldServiceWithParameter(name){
    //console.log("before service");
    return this.http.get<HelloWorldBean>(`http://localhost:8080/helloBean/${name}`);
  }

}
