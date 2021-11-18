import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPropsComponent } from './widget-props.component';

describe('WidgetPropsComponent', () => {
  let component: WidgetPropsComponent;
  let fixture: ComponentFixture<WidgetPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetPropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
