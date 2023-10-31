import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'IronMan';
  public age: number = 25;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${ this.name } - ${this.age}`;
  }

  changeHero(): void{
    this.name = 'SPiderMan'.toUpperCase();
  }

  changeAge(): void{
    this.age = 45;
  }

  resetForm(): void{
    this.name = 'IronMan';
    this.age = 25;
  }
}
