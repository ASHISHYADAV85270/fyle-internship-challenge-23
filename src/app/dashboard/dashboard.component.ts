import { Component } from '@angular/core';
import { UserData } from '../types/UserData';
import { RepoData } from '../types/RepoData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  userdata: UserData = {
    username: '',
    userAvatar: '',
    userBio: '',
    userLocation: '',
    userTwitterUrl: '',
    isValidUser: false,
    githubUrl: '',
  };

  repos: any = [];
  configureUserData(event: any): void {
    if (event === null) {
      return;
    }

    const {
      name: username,
      avatar_url: userAvatar,
      bio: userBio,
      location,
      twitter_username: userTwitterUrl,
      html_url: githubUrl,
    } = event[0];

    this.userdata = {
      username,
      userAvatar,
      userBio,
      userLocation: location ?? 'Location Not Provided',
      userTwitterUrl: userTwitterUrl ?? 'Twitter Not Provided',
      isValidUser: this.userdata.username === '',
      githubUrl,
    };

    this.repos = event[1];
  }
}
