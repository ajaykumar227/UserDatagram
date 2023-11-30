import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit{

  comments: any = [];
  filteredComments: any = [];
  searchText = ""; 
  

  constructor(private usersService: UsersService){}

  ngOnInit(): void {
    this.usersService.getComments().subscribe((data) => {
      this.comments = data;
      this.filteredComments = data;
    })
  }


  onSearch(){
    this.filteredComments = this.comments.filter((comment: any) => {
      return comment.name.toLowerCase().includes(this.searchText.toLowerCase().trim())
    })
  }

  onKeyChange(){
    this.onSearch();
  }
}
