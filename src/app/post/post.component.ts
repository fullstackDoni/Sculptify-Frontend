import {Component} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  id: any[] = [];
  posts: any[] = [];
  title: string = '';
  text: string = '';
  tags: string = '';
  imageUrl: string = '';

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute) {
  }

  getAll() {
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

  getById() {
    const id = this.route.snapshot.paramMap.get('id');

    const authToken = localStorage.getItem('authToken');
    let headers = new HttpHeaders();

    if (authToken) {
      headers = headers.set('Authorization', `Bearer ${authToken}`);
    }

    this.http.get(`http://localhost:4444/posts/${id}`, { headers }).subscribe(
      (response: any) => {
        console.log("Post by ID");
        this.posts = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
