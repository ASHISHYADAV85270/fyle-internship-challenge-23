import { Component, Input } from '@angular/core';
import { UserData } from 'src/app/types/UserData';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() userdata: UserData = {} as UserData;
}
