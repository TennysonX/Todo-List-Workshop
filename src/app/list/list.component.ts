import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  service_url = 'https://669338d0c6be000fa07a1a18.mockapi.io/todo/v1/topic'
  topicId:any
  list:any = []
  todo = new FormControl('')

  constructor(private route:ActivatedRoute, private http: HttpClient){
    this.route.paramMap.subscribe(params => {
      console.log(params.get('topicId'))
      this.topicId = params.get('topicId')
      this.loadList()
    })
  }

  loadList(){
    console.log(`${this.service_url}/${this.topicId}/todo`)
    this.http.get(`${this.service_url}/${this.topicId}/todo`).subscribe({
      next: (result) => {
        console.log(result)
        this.list = result
      }
    })
  }

  onAddTodo(){
    let body = {
      "todo": this.todo.value
    }
    this.http.post(`${this.service_url}/${this.topicId}/todo/`,body).subscribe({
      next: (result) => {
        console.log(result)
        this.loadList()
      }
    })
  }

  onRemoveTodo(id: number){
    console.log(id)
    this.http.delete(`${this.service_url}/${this.topicId}/todo/${id}`).subscribe({
      next: (result) => {
        console.log(result)
        this.loadList()
      }
    })
  }

}
