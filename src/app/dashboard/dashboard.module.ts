// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        FormsModule,
        RouterModule 
    ],
    declarations: [
        DashboardComponent,
        AddUserComponent,
        EditUserComponent
    ],
    exports: [
        DashboardComponent,
        AddUserComponent,
        EditUserComponent
    ]
})
export class DashboardModule {

}
