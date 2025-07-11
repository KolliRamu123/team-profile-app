import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
   constructor(private readonly router:Router){

  }
  openProfileOne(){
    this.router.navigate(['profile-one'])
  }
  openProfileTwo(){
    this.router.navigate(['profile-two'])
  }
  openProfileThree(){
    this.router.navigate(['profile-three'])
  }

}
