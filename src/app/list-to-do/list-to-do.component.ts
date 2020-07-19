import { TodoDataService } from "./../service/data/todo-data.service";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public isDone: boolean,
    public targetDate: Date){

  }
}

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDoComponent implements OnInit {

  todoList:Todo[]

  // todoList =[ new Todo(1,"Learn to dance",false, new Date),
  // new Todo(2,"become expert at angular",false, new Date),
  // new Todo(3,"visit Egypt",false, new Date)
  // ]

  constructor(private todoService:TodoDataService,
    private router: Router) { }

  message : string
  ngOnInit(): void {
    this.refreshTodos();
  }


  refreshTodos(){
    this.todoService.getAllTodos('mahmoud').subscribe(
      response => {
        console.log(response);
        this.todoList = response;
      }
    )
  }

  deleteTodo(id){
    this.todoService.deleteTodo('mahmoud', id).subscribe(
      response =>{
        console.log(response);
        this.message = `Deleted successfully for id: ${id}`;
        this.refreshTodos();
      }
    )
  }

  udpateTodo(id){
    console.log(`udpate ${id}`)
   this.router.navigate(['todos',id]);
  }

  addTodo(){
    this.router.navigate(['todos',-1]);
  }

}
