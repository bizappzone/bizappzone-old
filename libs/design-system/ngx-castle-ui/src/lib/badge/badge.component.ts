import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'baz-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
  constructor() {
    console.log('In badge constructor');
  }

  ngOnInit(): void {
    console.log('In badge component');
  }
}
