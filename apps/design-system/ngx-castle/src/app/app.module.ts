import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgxCastleUiModule } from '@bizappzone/ngx-castle-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    NgxCastleUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
