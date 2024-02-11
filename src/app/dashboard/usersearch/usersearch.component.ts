import { Component, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { EventEmitter } from '@angular/core';
import { forkJoin } from 'rxjs';

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
      forkJoin({
        user: this.apiService.getUser(username),
        repos: this.apiService.getRepos(userdata.repos_url),
      }).subscribe((results: any) => {
        this.userdataChange.emit([results.user, results.repos]);
        this.username = '';
      });
    });
  }
}
