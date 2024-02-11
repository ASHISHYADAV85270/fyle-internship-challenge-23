import { Component } from '@angular/core';
import { UserData } from '../types/UserData';

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

  configureUserData(event: any): void {
    const {
      name: username,
      avatar_url: userAvatar,
      bio: userBio,
      location,
      twitter_username: userTwitterUrl,
      html_url: githubUrl,
    } = event;

    this.userdata = {
      username,
      userAvatar,
      userBio,
      userLocation: location ?? 'Unknown',
      userTwitterUrl,
      isValidUser: true,
      githubUrl,
    };
  }
}
