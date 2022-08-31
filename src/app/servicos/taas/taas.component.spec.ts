import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaasComponent } from './taas.component';

describe('TaasComponent', () => {
  let component: TaasComponent;
  let fixture: ComponentFixture<TaasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
