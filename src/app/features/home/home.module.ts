import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import {
    MatButtonModule,
    MatSnackBarModule,
} from '@angular/material';

import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatSnackBarModule,
    ],
    declarations: [
        HomeComponent,
    ]
})
export class HomeModule { }