import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersUrl = "https://jsonplaceholder.typicode.com/users";

  // postsUrl = "https://jsonplaceholder.typicode.com/posts";


  commentsUrl = "https://jsonplaceholder.typicode.com/comments";

  todosUrl = "https://jsonplaceholder.typicode.com/todos";

  albumsUrl = "https://jsonplaceholder.typicode.com/albums";

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.usersUrl);
  }

  getComments(){
    return this.http.get(this.commentsUrl);
  }

  getTodos(){
    return this.http.get(this.todosUrl);
  }

  getAlbums(){
    return this.http.get(this.albumsUrl);
  }

  
}
