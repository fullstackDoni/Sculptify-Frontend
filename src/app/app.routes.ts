import {RouterLink, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PostListComponent} from "./post-list/post-list.component";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ProfileComponent} from "./profile/profile.component";
import {CommonModule} from "@angular/common";
import {PostUpdateComponent} from "./post-update/post-update.component";
import {PostDeleteComponent} from "./post-delete/post-delete.component";
import {PostComponent} from "./post/post.component";
import {PostDetailsComponent} from "./post-details/post-details.component";
import {LogoutComponent} from "./logout/logout.component";
import {AuthService} from "./auth.service";

export const routes: Routes = [
  {path: '', redirectTo: '/post', pathMatch: 'full'},
  {path: 'post', component: PostComponent},
  {path: 'post-list', component: PostListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'post-update/:id', component: PostUpdateComponent},
  {path: 'post-delete/:id', component: PostDeleteComponent},
  {path: 'post-details/:id', component: PostDetailsComponent},
  // {path: '**', redirectTo: '/post'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule,FormsModule,CommonModule,RouterLink],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule {
}
