import { Component, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.scss'],
})
export class UsersearchComponent {
  username: string = '';
  @Output() userdataChange = new EventEmitter<any>();

  constructor(private apiService: ApiService) {}

  handleSubmit(username: string) {
    this.apiService.getUser(username).subscribe((userdata: any) => {
      this.userdataChange.emit(userdata);
    });
  }
}
