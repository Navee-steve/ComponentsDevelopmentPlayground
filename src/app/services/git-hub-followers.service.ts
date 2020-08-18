import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GitHubFollowersService extends DataService {

  constructor(httpClient: HttpClient) {
    super(httpClient,'','https://api.github.com/users/mosh-hamedani/followers');
   }
}
