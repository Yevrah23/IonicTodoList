import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTaskPage } from './add-task';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTaskPage),
    FormsModule,
    ReactiveFormsModule
  ],
  
})
export class AddTaskPageModule {}
