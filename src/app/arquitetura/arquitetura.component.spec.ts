import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquiteturaComponent } from './arquitetura.component';

describe('ArquiteturaComponent', () => {
  let component: ArquiteturaComponent;
  let fixture: ComponentFixture<ArquiteturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArquiteturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArquiteturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
