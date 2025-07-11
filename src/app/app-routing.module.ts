import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileOneComponent } from './profile-one/profile-one.component';
import { ProfileTwoComponent } from './profile-two/profile-two.component';
import { ProfileThreeComponent } from './profile-three/profile-three.component';

const routes: Routes = [{path:'profile-one',component:ProfileOneComponent},
  {path:'profile-two',component:ProfileTwoComponent},
  {path:'profile-three',component:ProfileThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
