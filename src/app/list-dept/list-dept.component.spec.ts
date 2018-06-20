import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeptComponent } from './list-dept.component';

describe('ListDeptComponent', () => {
  let component: ListDeptComponent;
  let fixture: ComponentFixture<ListDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
