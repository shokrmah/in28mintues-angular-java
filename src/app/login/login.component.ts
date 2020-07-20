import{HardcidedAuthService} from './../service/Hardcided-Auth.Service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthService } from '../service/basic-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "mahmoud";
  password = "dummy";
  errorMessage = "Invalid data";
  invalidLogin = false;

  constructor(private router: Router,
     public auth: HardcidedAuthService,
     private basicAuthService: BasicAuthService) { 
  }

  ngOnInit(): void {
  }

  handleBasicAuthLogin(){
    this.basicAuthService.executeAuthService(this.username,this.password)
    .subscribe(
      data => {
        console.log(data)
        this.invalidLogin = false;
        this.router.navigate(['welcome',this.username]);
      },
      error =>{
        console.log(error)
        this.invalidLogin = true;
      }
    )
  }


  handleLogin(){
    //if(this.username==="mahmoud" && this.password==="dummy")
    if(this.auth.authenticate(this.username,this.password))
    {
      this.invalidLogin = false;
      this.router.navigate(['welcome',this.username]);
    }
      else
        this.invalidLogin = true;
  }

}
