import { Component } from '@angular/core';
import { Tasks } from "../../app/tasks/tasks";
import { NavController, IonicPage } from 'ionic-angular';
import { AddTaskPage } from '../add-task/add-task';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasksArr: { 
    taskName: string }[] = [];
  taskToEdit:{
    taskName: string
  }
  constructor(public navCtrl: NavController, private tasks:Tasks) {

  }

  ionViewWillEnter(){
    this.tasksArr  = this.tasks.getTasks();
    console.log(this.tasksArr);

  }
  onDeleteTask(value:{taskName:string}){
    this.tasks.deleteTasks(value);

  }
}
