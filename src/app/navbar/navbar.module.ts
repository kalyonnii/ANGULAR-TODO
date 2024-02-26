import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ]
,
exports:[
  NavbarComponent
]
})
export class NavbarModule { }
