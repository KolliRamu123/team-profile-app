import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-one',
  templateUrl: './profile-one.component.html',
  styleUrls: ['./profile-one.component.scss']
})
export class ProfileOneComponent {
  name="Malleswararao"
  department="developer"
  position="Assosiate"
  status="Active";
  remarks="no remarks"
  p1img="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww";

}
