import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router, RouterModule} from "@angular/router";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  postId: number[] = [];
  posts: any[] = [];
  title: string = '';
  text: string = '';
  tags: string = '';
  imageUrl: string = '';

  constructor(private router: Router, private http: HttpClient) {
  }

  create(): void {
    console.log(this.title);
    console.log(this.text);
    console.log(this.tags);
    console.log(this.imageUrl);
    const create = {
      title: this.title,
      text: this.text,
      tags: this.tags,
      imageUrl: this.imageUrl
    };
    const authToken = localStorage.getItem('authToken');
    let headers = new HttpHeaders()

    if (authToken) {
      headers = headers.set("Authorization", `Bearer ${authToken}`)
    }
    this.http.post('http://localhost:4444/posts/create', create, {
      headers
    }).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/post']);
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

  getAll(): void {
    const authToken = localStorage.getItem('authToken');
    let headers = new HttpHeaders();

    if (authToken) {
      headers = headers.set('Authorization', `Bearer ${authToken}`);
    }

    this.http.get('http://localhost:4444/posts', {headers}).subscribe(
      (response: any) => {
        console.log("All Post")
        this.posts = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit() {
    this.getAll();
  }
}
