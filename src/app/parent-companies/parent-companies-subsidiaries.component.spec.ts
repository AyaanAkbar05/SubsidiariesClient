import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCompaniesSubsidiariesComponent } from './parent-companies-subsidiaries.component';

describe('ParentCompaniesSubsidiariesComponent', () => {
  let component: ParentCompaniesSubsidiariesComponent;
  let fixture: ComponentFixture<ParentCompaniesSubsidiariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentCompaniesSubsidiariesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentCompaniesSubsidiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
