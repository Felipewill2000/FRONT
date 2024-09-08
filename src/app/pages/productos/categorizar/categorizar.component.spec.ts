import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizarComponent } from './categorizar.component';

describe('CategorizarComponent', () => {
  let component: CategorizarComponent;
  let fixture: ComponentFixture<CategorizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorizarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
