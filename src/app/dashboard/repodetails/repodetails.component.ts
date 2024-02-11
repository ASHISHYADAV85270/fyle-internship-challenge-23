import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { RepoData } from 'src/app/types/RepoData';

@Component({
  selector: 'app-repodetails',
  templateUrl: './repodetails.component.html',
  styleUrls: ['./repodetails.component.scss'],
})
export class RepodetailsComponent implements OnInit {
  languages: any = [];

  constructor(private apiService: ApiService) {}

  @Input() curr_repo: RepoData = {} as RepoData;

  ngOnInit() {
    if (this.curr_repo.languages_url) {
      this.apiService
        .getLanguages(this.curr_repo.languages_url)
        .subscribe((data: any) => {
          this.languages = Object.keys(data).slice(0, 5);
        });
    }
  }
}
