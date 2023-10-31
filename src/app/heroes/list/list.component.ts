import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroesName: string[] = ['Goku', 'Viuda negra','wakanda','ironMan'];
  public deletedHero?: string;

  removeLastHero(): void{
    this.deletedHero = this.heroesName.pop();
    console.log(this.deletedHero);
  }

}
