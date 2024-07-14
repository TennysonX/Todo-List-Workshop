import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.css'
})
export class TopicComponent {

  service_url = 'https://669338d0c6be000fa07a1a18.mockapi.io/todo/v1/topic'
  topics:any = []

  constructor(private http: HttpClient) {
    http.get(this.service_url).subscribe({
      next: (result) => {
        this.topics = result
      }
    })
  }
}
