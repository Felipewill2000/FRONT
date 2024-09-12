import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearusComponent } from './crearus.component';

describe('CrearUsuarioComponent', () => {
  let component: CrearusComponent;
  let fixture: ComponentFixture<CrearusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
