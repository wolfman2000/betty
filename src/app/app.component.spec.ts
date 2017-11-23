import { ComponentFixture, ComponentFixtureAutoDetect, TestBed, async } from '@angular/core/testing';
import { NgModule, DebugElement } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AngularFireDatabase } from 'angularfire2/database';

import { AppComponent } from './app.component';

describe('The application component', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  const dbStub: any = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{
        provide: AngularFireDatabase,
        useValue: dbStub
      }, {
        provide: APP_BASE_HREF,
        useValue: '/'
      }, {
        provide: ComponentFixtureAutoDetect,
        useValue: true
      }]
    }).compileComponents();
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent( AppComponent );

    comp = fixture.componentInstance;

    de = fixture.debugElement;
    el = de.nativeElement;
  });

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
