import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertidorJEVLComponent } from './convertidor-jevl.component';

describe('ConvertidorJEVLComponent', () => {
  let component: ConvertidorJEVLComponent;
  let fixture: ComponentFixture<ConvertidorJEVLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertidorJEVLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertidorJEVLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
