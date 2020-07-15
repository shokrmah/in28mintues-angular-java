import { Component, OnInit } from '@angular/core';

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


  todoList =[ new Todo(1,"Learn to dance",false, new Date),
  new Todo(2,"become expert at angular",false, new Date),
  new Todo(3,"visit Egypt",false, new Date)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
