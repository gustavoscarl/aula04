import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesPostagemComponent } from './componentes-postagem.component';

describe('ComponentesPostagemComponent', () => {
  let component: ComponentesPostagemComponent;
  let fixture: ComponentFixture<ComponentesPostagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentesPostagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentesPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
