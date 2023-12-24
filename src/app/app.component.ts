import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  user: boolean = false;

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
    this.user = this.authService.isAuthenticated();
  }

  login() {
    this.authService.login();
    this.updateUserStatus();
  }

  logout() {
    this.authService.logout();
    this.updateUserStatus();
  }

  private updateUserStatus() {
    this.user = this.authService.isAuthenticated();
  }
}
