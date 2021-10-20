import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'baz-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {
    console.log('In button constructor');
  }

  ngOnInit(): void {
    console.log('In button component');
  }
}
