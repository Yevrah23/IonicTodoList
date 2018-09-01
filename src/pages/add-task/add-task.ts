import { Component } from '@angular/core';
import {Tasks} from '../../app/tasks/tasks';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the AddTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage {
  constructor(private tasks: Tasks, public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskPage');
  }

  onAddTask(value: { taskName: string}){
    console.log(value);
    this.tasks.addTask(value);
  }

}
