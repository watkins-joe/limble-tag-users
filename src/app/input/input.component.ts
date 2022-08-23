import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  tagCheck(e: Event) {
    const target = e.target as HTMLInputElement;

    console.log(`value: ${target.value}`);

    console.log(`target: ${e.target}`);

    if (target.value.includes('@')) {
      console.log('open menu');
    }
  }
}
