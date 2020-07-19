import { WelcomeDataService } from "./../service/data/welcome-data.service";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  name ='';
  welcomeMessage:string
  isWelcomeMessage:boolean = false;

  constructor(private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }


  getWelcome(){
    //console.log(this.service.executeHelloWroldService())
    this.service.executeHelloWroldService().subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
    );
  }

  handleResponse(response){
    this.isWelcomeMessage = true;
    this.welcomeMessage = response.message;
  }

  handleError(error){
    this.isWelcomeMessage=true;
    this.welcomeMessage = error.error.message;
  }

}
