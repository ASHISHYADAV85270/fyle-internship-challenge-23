import { Component, OnInit } from '@angular/core';
import { UserData } from '../types/UserData';
import { RepoData } from '../types/RepoData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userdata: UserData = {
    username: '',
    userAvatar: '',
    userBio: '',
    userLocation: '',
    userTwitterUrl: '',
    isValidUser: false,
    githubUrl: '',
  };
  repos: RepoData[] = [];
  paginatedRepos: RepoData[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 6;

  ngOnInit() {
    this.updatePagination();
  }

  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedRepos = this.repos.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  totalPages() {
    return Math.ceil(this.repos.length / this.itemsPerPage);
  }
  goToPage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }
  getPageNumbers(): number[] {
    const pageNumbers = [];
    for (let i = 1; i <= this.totalPages(); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }
  configureUserData(event: any): void {
    if (!event) return;

    const [userData, reposData] = event;

    const {
      name: username,
      avatar_url: userAvatar,
      bio: userBio,
      location,
      twitter_username: userTwitterUrl,
      html_url: githubUrl,
    } = userData;

    this.userdata = {
      username,
      userAvatar,
      userBio,
      userLocation: location || 'Location Not Provided',
      userTwitterUrl: userTwitterUrl || 'Twitter Not Provided',
      isValidUser: true,
      githubUrl,
    };

    this.repos = reposData;
    this.updatePagination();
  }
}
