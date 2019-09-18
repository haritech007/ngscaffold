import { Component } from '@angular/core';
import { products } from './products';
import { ProductListComponent } from './product-list/product-list.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title: string;
  todoInput: string;
  // todosList: Array<string>;
  todosList: string[];
  
  constructor() {
    this.title = "Angular Todos App";
    this.todosList = [];
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
