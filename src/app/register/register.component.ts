import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgModule} from "@angular/core";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email: string = '';
  passwordHash: string = '';
  fullName: string = '';
  avatarUrl: string = '';

  constructor(private http: HttpClient) {
  }


  register(): void {
    console.log('Email:', this.email);
    console.log('Password:', this.passwordHash);
    console.log('FullName:', this.fullName);
    console.log('AvatarUrl:', this.avatarUrl);
    const doc = {
      email: this.email,
      password: this.passwordHash,
      fullName: this.fullName,
      avatarUrl: this.avatarUrl
    };

    this.http.post('http://localhost:4444/register', doc).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error('Registration Error:', error);
      }
    );
  }

  save(): void {
    this.register();
  }
}
