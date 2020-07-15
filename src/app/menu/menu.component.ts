import{HardcidedAuthService} from './../service/Hardcided-Auth.Service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //isUserLoggedIn = false;
  constructor(public auth: HardcidedAuthService) { }

  ngOnInit(): void {
    //this.isUserLoggedIn = this.auth.isUserLoggedIn();
  }



}
