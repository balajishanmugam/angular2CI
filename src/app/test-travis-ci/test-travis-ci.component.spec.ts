import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTravisCiComponent } from './test-travis-ci.component';

describe('TestTravisCiComponent', () => {
  let component: TestTravisCiComponent;
  let fixture: ComponentFixture<TestTravisCiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTravisCiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTravisCiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
