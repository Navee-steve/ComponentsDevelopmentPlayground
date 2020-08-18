import { TestBed } from '@angular/core/testing';

import { GitHubFollowersService } from './git-hub-followers.service';

describe('GitHubFollowersService', () => {
  let service: GitHubFollowersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitHubFollowersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
