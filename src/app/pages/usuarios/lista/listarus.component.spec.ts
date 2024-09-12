import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarusComponent } from './listarus.component';

describe('ListarUsuarioComponent', () => {
  let component: ListarusComponent;
  let fixture: ComponentFixture<ListarusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
