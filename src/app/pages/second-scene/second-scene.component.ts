import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { extend, NgtCanvas } from 'angular-three';
import { BoxGeometry, Mesh } from 'three';

extend({
  Mesh,
  BoxGeometry,
});

@Component({
  standalone: true,
  template: `<ngt-mesh>
    <ngt-box-geometry />
  </ngt-mesh>`,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneGraph {}

@Component({
  selector: 'app-second-scene',
  standalone: true,
  imports: [NgtCanvas],
  templateUrl: './second-scene.component.html',
  styleUrl: './second-scene.component.css',
})
export class SecondSceneComponent {
  readonly sceneGraph = SceneGraph;
}
