import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarServicesComponent } from './menu-bar-services.component';

describe('MenuBarServicesComponent', () => {
  let component: MenuBarServicesComponent;
  let fixture: ComponentFixture<MenuBarServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBarServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBarServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
