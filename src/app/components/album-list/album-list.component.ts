import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit{

  albums: any = [];
  filteredAlbums: any = []
  searchText = ""; 

  constructor(private usersService: UsersService){}

  ngOnInit(): void {
    this.usersService.getAlbums().subscribe((data) => {
      this.albums = data;
      this.filteredAlbums = data;
    })
  }

  onSearch(){
   this.filteredAlbums = this.albums.filter((album: any) => {
    return album.title.toLowerCase().includes(this.searchText.toLowerCase().trim());
   });
  }

  onKeyChange(){
  this.onSearch();
  }
}
