import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{

  users:any = [];
  filteredUsers: any = [];
  searchText = "";

  loading = true;

  constructor(public usersService: UsersService){}

  ngOnInit(): void {
     this.usersService.getUsers().subscribe((data) => {  
       this.users = data;
       this.filteredUsers = data;
     });

     setTimeout(() => {
      this.loading = false;
     }, 2000)
  }

  onSearch(){
    this.filteredUsers = this.users.filter((user: any) => {
      return user.name.toLowerCase().includes(this.searchText.toLowerCase().trim());
    });
  }

  onKeyChange(){
    this.onSearch();
  }

  sortUsers(order: any){
    if(order == 'asc'){
       this.filteredUsers.sort((user1: any, user2: any) => {
        return user1.name > user2.name ? 1 : -1;
       });
    }else{
      this.filteredUsers.sort((user1: any, user2: any) => {
        return user1.name > user2.name ? -1 : 1;
      });
    }
  }
   
}
