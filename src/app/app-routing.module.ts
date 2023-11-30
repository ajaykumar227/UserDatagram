import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { UserTodosComponent } from './components/user-todos/user-todos.component';
import { AlbumListComponent } from './components/album-list/album-list.component';

const routes: Routes = [
  { path: 'users', component: UsersListComponent},
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users/:id', component: UserDetailsComponent},
  { path: 'posts', component: PostsListComponent},
  { path: 'comments', component: CommentsListComponent},
  { path: 'todos', component: UserTodosComponent},
  { path: 'albums', component: AlbumListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
