import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@bizappzone/xplat/web/features';

@Component({
  selector: 'baz-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
