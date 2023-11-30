import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsUrl = "http://localhost:3000/posts";

  constructor(public http: HttpClient) { }

  getPosts(){
    return this.http.get(this.postsUrl);
  }
  addPosts(postObj: any){
    return this.http.post(this.postsUrl, postObj);
  }
  removePost(postId: number){
    return this.http.delete(`${this.postsUrl}/${postId}`);
  }
  updatePost(id: number, post: any){
    return this.http.put(`${this.postsUrl}/${id}`, post);
  }
}
