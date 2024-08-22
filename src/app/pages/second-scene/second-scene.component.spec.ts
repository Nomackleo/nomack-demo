import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSceneComponent } from './second-scene.component';

describe('SecondSceneComponent', () => {
  let component: SecondSceneComponent;
  let fixture: ComponentFixture<SecondSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondSceneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
