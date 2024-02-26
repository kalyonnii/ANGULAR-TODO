import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { ReactiveFormsModule } from '@angular/forms';

import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  exports:[
    TodoComponent
  ]
})
export class TodoModule { }
