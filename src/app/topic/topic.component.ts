import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.css'
})
export class TopicComponent {

  service_url = 'https://669338d0c6be000fa07a1a18.mockapi.io/todo/v1/topic'
  topics:any = []

  topic = new FormControl('')

  constructor(private http: HttpClient) {

    this.loadTopics()

  }
  loadTopics(){

    this.http.get(this.service_url).subscribe({
      next: (result) => {
        this.topics = result
      }
    })
  }


  onAddTopic(){
    let body = {
      "topic": this.topic.value
    }
    this.http.post(this.service_url, body).subscribe({
      next: (result) => {
        console.log(result)
      }
    })
  }
}
