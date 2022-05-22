import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
    <div>
      <input [(ngModel)]="empName" type="text" />
      {{ empName }}

      <br /><br />

      <input #myid type="text" />
      <button (click)="logMessage(myid)">Log</button>

      <br /><br />

      <button (click)="onClick($event)">Greet</button>
      {{ message }}

      <button (click)="message = 'React'">Button 2</button>

      <h2 [ngStyle]="titleStyles">Angular style 2</h2>

      <h2 [style.color]="highlightedColor">angular is challenging to learn</h2>

      <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding Demo</h2>

      <h2 [ngClass]="messageClasses">ng class directive demo</h2>

      <h2 [class.text-danger]="hasError">Demo for checking error class</h2>

      <h2 class="text-success">Angular is good for building SPA Apps</h2>

      <h2 [class]="successClass">class level binding demo</h2>

      <h2 class="text-special" [class]="successClass">Another demo</h2>

      <input [id]="myId" type="text" value="Balu" />

      <input
        bind-disabled="isDisabled"
        id="{{ myId }}"
        type="text"
        value="shiva"
      />

      <h2>Welcome {{ name }}</h2>
      <br />

      <h2>{{ 10 * 10 }}</h2>

      <h2>{{ 'welcome boy ' + name }}</h2>

      <h2>{{ name.length }}</h2>

      <h2>{{ name.toUpperCase() }}</h2>

      <h2>{{ greet() }}</h2>

      <h2>{{ siteUrl }}</h2>

      <p>inline template example test works!</p>
      <p></p>
      <p>Second component</p>
    </div>
    <div>
      second div
      <p>third component</p>
    </div>
  `,
  styles: [
    `
      div {
        text-align: center;
      }

      .text-success {
        color: green;
      }

      .text-danger {
        color: red;
      }

      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  constructor() {
    this.empName = 'Deepak';
  }

  ngOnInit(): void {}

  public empName: string = '';

  public name: string = 'Sangeetha';
  public siteUrl: string = window.location.href;
  public myId = 'testId';
  public isDisabled: boolean = true;
  public successClass: string = 'text-success';
  public hasError = true;
  public isSpecial = true;
  public highlightedColor = 'skyblue';
  public message: string = '';

  public titleStyles = {
    color: 'red',
    fontStyle: 'italic',
  };

  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };

  logMessage(value: any) {
    console.log(value);
  }

  greet() {
    return 'New method called ' + this.name;
  }

  onClick(event: any) {
    //console.log('hi button clicked');
    alert(event.type);
    this.message = 'Welcome to angular';
  }
}
