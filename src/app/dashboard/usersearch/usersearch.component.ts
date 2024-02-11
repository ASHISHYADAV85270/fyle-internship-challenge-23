import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.scss'],
})
export class UsersearchComponent {
  username: string = '';

  constructor(private apiService: ApiService) {}

  handleSubmit(username: string) {
    this.apiService.getUser(username).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
