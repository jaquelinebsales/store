import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutherInformationsComponent } from './futher-informations.component';

describe('FutherInformationsComponent', () => {
  let component: FutherInformationsComponent;
  let fixture: ComponentFixture<FutherInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FutherInformationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutherInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
