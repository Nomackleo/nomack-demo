import { Routes } from '@angular/router';
import { FirstSceneComponent } from './pages/first-scene/first-scene.component';
import { SecondSceneComponent } from './pages/second-scene/second-scene.component';

export const routes: Routes = [
  {
    path: '',
    component: FirstSceneComponent,
  },
  {
    path: 'second-scene',
    component: SecondSceneComponent
  }
];
