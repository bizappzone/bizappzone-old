import { Directive } from '@angular/core';

// libs
import { BaseComponent } from '@bizappzone/xplat/core';
import { AppService } from '@bizappzone/xplat/nativescript/core';

@Directive()
export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
