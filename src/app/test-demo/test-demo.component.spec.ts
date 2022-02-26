import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DataService } from '../services/data.service';
import { TestDemoComponent } from './test-demo.component';
import { TestService } from './test.service';

// describe('TestDemoComponent', () => {
//   let component: TestDemoComponent;
//   let fixture: ComponentFixture<TestDemoComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ TestDemoComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(TestDemoComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

 
// });

describe('Component: TestDemo',()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[TestDemoComponent]
    });
})
it('should create the app',()=>{
  let fixture = TestBed.createComponent(TestDemoComponent);
  let app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy();
});

it('should use the username from the service',()=>{
  let fixture = TestBed.createComponent(TestDemoComponent);
  let app = fixture.debugElement.componentInstance;
 let testService = fixture.debugElement.injector.get(TestService);
 fixture.detectChanges();
 expect(testService.user.name).toEqual(app.user.name)
});

it('should display the user name  if user is looged in ',()=>{
  let fixture = TestBed.createComponent(TestDemoComponent);
  let app = fixture.debugElement.componentInstance;
  app.isLoggedIn =true;
 fixture.detectChanges();
 let compiled  = fixture.debugElement.nativeElement;
 expect(compiled.querySelector('p').textContent).toContain(app.user.name)
})

it('shouldn\'t display the user name  if user is not looged in ',()=>{
  let fixture = TestBed.createComponent(TestDemoComponent);
  let app = fixture.debugElement.componentInstance;
 fixture.detectChanges();
 let compiled  = fixture.debugElement.nativeElement;
 expect(compiled.querySelector('p').textContent).not.toContain(app.user.name)
});

it('shooldn\'t fetch data suucessfully if not called asynchronously',()=>{
  let fixture = TestBed.createComponent(TestDemoComponent);
  let app = fixture.debugElement.componentInstance;
  let dataService = fixture.debugElement.injector.get(DataService);
  let spy = spyOn(dataService, 'getDetails')
  .and.returnValue(Promise.resolve('Data'));
  fixture.detectChanges();
  expect(app.data).toBe(undefined);

});

it('shoold fetch data suucessfully if called asynchronously',async(()=>{
  let fixture = TestBed.createComponent(TestDemoComponent);
  let app = fixture.debugElement.componentInstance;
  let dataService = fixture.debugElement.injector.get(DataService);
  let spy = spyOn(dataService, 'getDetails')
  .and.returnValue(Promise.resolve('Data'));
  fixture.detectChanges();
  fixture.whenStable().then(()=>{
    expect(app.data).toBe('Data');

  })
}));
//or we can use the fakeasync and tick
//  function instead of async and when stable function

it('should fetch data suucessfully if called asynchronously',fakeAsync(()=>{
  let fixture = TestBed.createComponent(TestDemoComponent);
  let app = fixture.debugElement.componentInstance;
  let dataService = fixture.debugElement.injector.get(DataService);
  let spy = spyOn(dataService, 'getDetails')
  .and.returnValue(Promise.resolve('Data'));
  fixture.detectChanges();
  tick();
    expect(app.data).toBe('Data');

}));

});