import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/posts.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PostFormComponent } from '../post-form/post-form.component';
import { CoreService } from 'src/app/shared/core.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit{

  posts: any = [];
  filteredPosts: any = [];
  searchText = ""; 
  

  constructor(private postsService: PostsService, 
    private dialog: MatDialog,
    private coreService: CoreService){}

  ngOnInit(): void {
   this.getPostsList();
  }

  getPostsList(){
    this.postsService.getPosts().subscribe((data) => {
      this.posts = data;
      this.filteredPosts = data;
   });
  }

  onSearch(){
    this.filteredPosts = this.posts.filter((post: any) => {
      return post.title.toLowerCase().includes(this.searchText.toLowerCase().trim())
    })
  }

  onKeyChange(){
   this.onSearch();
  }

  onAddPost(){
    // console.log("Clicked");

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "40%";

    const dialog = this.dialog.open(PostFormComponent, dialogConfig);
    dialog.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getPostsList();
        }
      },
      error: (err) => {
        console.log(err);
      }
    })


  }

  deletePost(postId: number){
    this.postsService.removePost(postId)
    .subscribe(
       (data) => {
        this.coreService.openSnackBar("Post has been deleted!", "done");
        this.getPostsList();
       },
       (err) => {
        console.log(err)
       }
    )
  }

  editPost(post: any){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "40%";
    dialogConfig.data = post;

    const dialog = this.dialog.open(PostFormComponent, dialogConfig);

    dialog.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getPostsList();
        }
      },
      error: (err) => {
        console.log(err);
      }
    })

  }
    
}
