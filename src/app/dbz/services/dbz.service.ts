import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {id: uuid(),
      name:'krillin',
    power: 12},
    {
      id: uuid(),
      name:'vegeta',
      power:12000
    }
  ];


  constructor() { }


  addCharacter(character: Character): void{
    const newCharacter: Character = { ...character, id: uuid()};

    this.characters.push(newCharacter);
  }

  onDeleteById(id: string): Character[]{
    //this.characters.splice(index,1);
    //this.characters.forEach(char => console.log(char));
    this.characters = this.characters.filter(char => char.id !== id);
    this.characters.forEach(char => console.log(char));
     return this.characters;

  }

}
