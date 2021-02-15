import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoArray: string[] = [];

  todoSubmit(value: any){
    if (value!==""){
      this.todoArray.push(value.todo)
    } else {
      alert('Field required**')
    }
  }

  addTodo(value: string) {
    this.todoArray.push(value);
  }

  deleteItem(todo: string) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
  }
}
