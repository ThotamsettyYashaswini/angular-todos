import { Routes } from '@angular/router';
import { Counter } from './counter/counter';
import { TaskList } from './task-list/task-list';
import { Inputfeilds } from './inputfeilds/inputfeilds';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';

export const routes: Routes = [
  { path: 'counter', component: Counter },
  { path: 'task-list', component: TaskList },
  { path: 'inputfeilds', component: Inputfeilds },
  { path: 'home', component: Home },
  { path: 'profile', component: Profile, data: { name: 'Yashu' } },
  { path: '**', component: PageNotFound },
];
