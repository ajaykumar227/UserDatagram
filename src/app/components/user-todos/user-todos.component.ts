import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-user-todos',
  templateUrl: './user-todos.component.html',
  styleUrls: ['./user-todos.component.css']
})
export class UserTodosComponent implements OnInit{

  todos: any = [];
  filteredTodos: any = [];
  searchText = ""; 
  
 
  constructor(private usersService: UsersService){}

  ngOnInit(): void {
    this.usersService.getTodos().subscribe((data) => {
      this.todos = data;
    })
  }

  onSearch(){
    this.filteredTodos = this.todos.filter((todo: any) => {
      return todo.title.toLowerCase().includes(this.searchText.toLowerCase().trim());
    })
  }

  onKeyChange(){
  this.onSearch();
  }
}
