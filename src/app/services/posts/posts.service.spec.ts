import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostsService } from './posts.service';
import { HttpClient } from '@angular/common/http';

describe('PostsService', () => {
  let postsService: PostsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PostsService
      ]
    });
    postsService = TestBed.inject(PostsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should get posts as Observable', waitForAsync(inject([HttpTestingController, PostsService], (httpClient: HttpTestingController, postsService: PostsService) => {
    const postItem = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      }
    ];

    postsService.getPosts().subscribe((posts: any) => {
      expect(posts.length).toBe(3);
    });

    let req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('GET');

    req.flush(postItem);
    httpMock.verify();

  })));

  it('should be created', () => {
    expect(postsService).toBeTruthy();
  });
});
