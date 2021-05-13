import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms"


import { DatagridComponent } from './components/datagrid/datagrid.component';
import { PhotoGridComponent } from './components/photo-grid/photo-grid.component';

import { MatToolbarModule } from "@angular/material/toolbar"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { AddNewProfileComponent } from './components/add-new-profile/add-new-profile.component'


@NgModule({
  declarations: [
    DatagridComponent,
    PhotoGridComponent,
    ProfileDetailsComponent,
    AddNewProfileComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule
  ],
  exports : [
    PhotoGridComponent,
    DatagridComponent,
    ProfileDetailsComponent,
    AddNewProfileComponent
  ]
})
export class UiComponentsModule { }
