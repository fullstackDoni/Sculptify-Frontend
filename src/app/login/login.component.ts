import {HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  passwordHash: string = '';

  constructor(private router: Router, private http: HttpClient) {
  }

  login(): void {
    const loginData = {
      email: this.email,
      password: this.passwordHash
    };
    const authToken = localStorage.getItem('authToken');
    let headers = new HttpHeaders()

    if(authToken){
      headers = headers.set("Authorization", `Bearer ${authToken}`)
    }
    this.http.post('http://localhost:4444/login', loginData, {
      headers
    }).subscribe(
      (response: any) => {
        console.log(response);
        const authToken = response.token;

        // Store the token in localStorage
        localStorage.setItem('authToken', authToken);

        this.router.navigate(['/profile']);
      },
      (error) => {
        console.error(error);

        if (error instanceof HttpErrorResponse) {
          console.error(`Status: ${error.status}, Status Text: ${error.statusText}`);
          console.error('Response:', error.error);
        }
      }
    );
  }

}
