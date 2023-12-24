import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router, RouterModule} from "@angular/router";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent {
  user: any| null = null;
  _id: string = '';
  fullName: string = '';
  email: string = '';
  passwordHash: string = '';
  avatarUrl?: string = '';

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    const authToken = localStorage.getItem('authToken');
    let headers = new HttpHeaders();

    if (authToken) {
      headers = headers.set('Authorization', `Bearer ${authToken}`);
    }
    this.http.get('http://localhost:4444/me', {headers}).subscribe(
      (response: any) => {
        console.log("User", response);
        this.user = response;
        },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
