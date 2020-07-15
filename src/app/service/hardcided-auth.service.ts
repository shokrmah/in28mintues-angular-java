import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcidedAuthService {

  constructor() {

    
   }

   authenticate(user, password){
     //console.log('before '  +this.isUserLoggedIn());
    if(user==="mahmoud" && password==="dummy"){
      sessionStorage.setItem('authenticaterUser',user);
      //console.log('after '  +this.isUserLoggedIn());
      return true;
    }

    return false
   }

   isUserLoggedIn(){
     let user = sessionStorage.getItem('authenticaterUser');
     return !(user === null);
   }

   logout(){
    sessionStorage.removeItem('authenticaterUser');
   }

}
