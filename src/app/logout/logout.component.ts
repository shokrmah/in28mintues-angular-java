import{HardcidedAuthService} from './../service/Hardcided-Auth.Service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public auth: HardcidedAuthService) { }

  ngOnInit(): void {
    this.auth.logout();
  }

}
