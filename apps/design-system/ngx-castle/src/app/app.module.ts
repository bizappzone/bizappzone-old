import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgxCastleUiModule } from '@bizappzone/ngx-castle-ui';
import { NgxCastleFormsModule } from '@bizappzone/ngx-castle-forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    NgxCastleUiModule,
    NgxCastleFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
