import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>{{title}}</h1>
  <hr>
  <h1>{{count}}</h1>
  <button (click)="increaseBy(+1)">+</button>
  <button (click)="reset()">reset</button>
  <button (click)="increaseBy(-1)">-</button>
  `
})

export class CounterComponent{
  title: string = 'Counter';
  count: number = 10;

  increaseBy(value: number){
    this.count += value;
  }

  reset(){
    this.count = 10;
  }
}
