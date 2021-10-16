import { Component } from '@angular/core';
import { AppService } from '@bizappzone/xplat/nativescript/core';
import { AppBaseComponent } from '@bizappzone/xplat/nativescript/features';

@Component({
  selector: 'baz-root',
  template: `
    <GridLayout>
      <page-router-outlet></page-router-outlet>
    </GridLayout>
  `
})
export class AppComponent extends AppBaseComponent {
  constructor(appService: AppService) {
    super(appService);
  }
}
