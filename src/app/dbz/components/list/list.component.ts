import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: 'list.component.html'
})

export class ListComponent implements OnInit {

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      id: '',
      name:'picollo',
      power: 3000
    }
  ]
  constructor() { }

  ngOnInit() { }

  onDeleteCharacter(id: string): void{
    this.onDeleteId.emit(id);
  console.log(id);
  }
}
