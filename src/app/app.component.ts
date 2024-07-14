import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list';

  service_url = 'https://669338d0c6be000fa07a1a18.mockapi.io/todo/v1/topic'
  topics:any = []

  constructor(private http: HttpClient){
    http.get(this.service_url).subscribe({
      next: (result) => {
        this.topics = result
      }
    })
  }
}
