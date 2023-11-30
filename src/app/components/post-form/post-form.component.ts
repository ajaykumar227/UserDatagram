import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/shared/core.service';
import { PostsService } from 'src/app/shared/posts.service';
 
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit{

  postForm!: FormGroup;
  submittedPost: boolean = false;

  constructor(public fb: FormBuilder, private postsService: PostsService,
    private dialogRef: MatDialogRef<PostFormComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any,
     private coreService: CoreService){
    this.postForm = this.fb.group({
       title: ['', [Validators.required]],
       body: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.postForm.patchValue(this.data);
  }

  onPost(){
    if(this.postForm.valid){
      if(this.data){
        this.submittedPost = true;
        this.postsService.updatePost(this.data.id, this.postForm.value)
        .subscribe((data) => {
         this.coreService.openSnackBar("Post Updated successfully");
         this.dialogRef.close(true);
        });
      }else{
        this.submittedPost = true;
        this.postsService.addPosts(this.postForm.value)
        .subscribe((data) => {
         this.coreService.openSnackBar("Post posted successfully");
         this.dialogRef.close(true);
        });
      }
    } 
  }

  onReset(){
    this.postForm.reset();
    this.postForm.setValue({
      title: '',
      body: ''
    });
    this.dialogRef.close(true);
  }

}
