import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegClientesComponent } from './reg-clientes.component';

describe('RegClientesComponent', () => {
  let component: RegClientesComponent;
  let fixture: ComponentFixture<RegClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
