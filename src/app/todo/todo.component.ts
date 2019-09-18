import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  title: string;
  todoInput: string;
  // todosList: Array<string>;
  todosList: string[];
  
  constructor() {
    this.title = "Angular Todos App";
    this.todosList = [];
  }

  ngOnInit() {
    
  }

  addTodo(todoItem: HTMLInputElement): void {   
    if(todoItem.value) {
      this.todosList.push(todoItem.value);
      todoItem.value = null;
    }
  }

  removeTodo(todoIndex: number) {
    this.todosList.splice(todoIndex, 1);
  }

}
