import { Routes } from '@angular/router';
import { TopicComponent } from './topic/topic.component';
import { ListComponent } from './list/list.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    { path: '', component: TopicComponent },
    { path: 'list/:topicId', component: ListComponent}
];
