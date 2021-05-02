import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import {MatIconModule} from '@angular/material/icon';
import { MainComponent } from './main/main.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { FormsModule } from '@angular/forms';

import { PostComponent } from './post/post.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    UserComponent,
    MainComponent,
    UserdetailComponent,
    PostComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    RouterModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [UserComponent,MainComponent,UserdetailComponent,PostComponent]
})

export class ComponentsModule { }
