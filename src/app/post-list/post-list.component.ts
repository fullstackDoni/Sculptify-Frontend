import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
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

    this.http.post('http://localhost:4444/posts/create', create).subscribe(
      (response: any) => {
        console.log(response);
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
