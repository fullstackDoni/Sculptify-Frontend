import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PostComponent} from "./post/post.component";
import {PostListComponent} from "./post-list/post-list.component";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AboutUsComponent} from "./about-us/about-us.component";

export const routes: Routes = [
  {path: '', redirectTo: '/post', pathMatch: 'full'},
  {path: 'post-list', component: PostListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: '**', redirectTo: '/post'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule,FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
