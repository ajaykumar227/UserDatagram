import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { UserTodosComponent } from './components/user-todos/user-todos.component';

import { UsersService } from './shared/users.service';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostsService } from './shared/posts.service';
import { CoreService } from './shared/core.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserDetailsComponent,
    AlbumListComponent,
    PostsListComponent,
    CommentsListComponent,
    UserTodosComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    UsersService,
    PostsService,
    CoreService
  ],
  bootstrap: [AppComponent],
  entryComponents: [PostFormComponent]
})
export class AppModule { }
