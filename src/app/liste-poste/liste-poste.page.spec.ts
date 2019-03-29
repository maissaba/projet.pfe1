import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePostePage } from './liste-poste.page';

describe('ListePostePage', () => {
  let component: ListePostePage;
  let fixture: ComponentFixture<ListePostePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePostePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePostePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
