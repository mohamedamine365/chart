import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';

export const routes: Routes = [
    {path:"",redirectTo:"chart",pathMatch:"full"},
    {path:"chart",component:ChartComponent}
];
