import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'team-profile-app';
  constructor(private rot:Router){

  }
  isapp():boolean{
    return this.rot.url=='/'
  }
  
}
