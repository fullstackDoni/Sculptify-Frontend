import {Component} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  _id: number | undefined;
  posts: any | null = null;

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // Используйте ActivatedRoute для получения параметра маршрута
    this.route.params.subscribe(params => {
      this._id = params['id'];

      // Теперь у вас есть доступ к значению id, и вы можете использовать его в запросе
      this.http.get(`http://localhost:4444/posts/${this._id}`).subscribe(
        (response: any) => {
          console.log("Fetched post details:", response);
          this.posts = response;
        },
        (error) => {
          console.error("Error fetching post details:", error);
        }
      );
    });
  }

}
