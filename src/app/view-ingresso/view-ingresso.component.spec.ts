import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIngressoComponent } from './view-ingresso.component';

describe('ViewIngressoComponent', () => {
  let component: ViewIngressoComponent;
  let fixture: ComponentFixture<ViewIngressoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIngressoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIngressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
