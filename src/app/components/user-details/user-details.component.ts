import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  currentUser: any;

  constructor(private usersService: UsersService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data: any) => {
      this.route.paramMap.subscribe((param) => {
        let userId = param.get('id');
        this.currentUser = data.find((user: any) => user.id == userId);
      });
    });
  }
}
