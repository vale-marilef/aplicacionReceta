import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoRecetaComponent } from './cuerpo-receta.component';

describe('CuerpoRecetaComponent', () => {
  let component: CuerpoRecetaComponent;
  let fixture: ComponentFixture<CuerpoRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuerpoRecetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
