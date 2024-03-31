import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCompaniesComponent } from './parent-companies.component';

describe('ParentCompaniesComponent', () => {
  let component: ParentCompaniesComponent;
  let fixture: ComponentFixture<ParentCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentCompaniesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
