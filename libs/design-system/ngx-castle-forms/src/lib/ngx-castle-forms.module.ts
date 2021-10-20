import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { FieldsetComponent } from './fieldset/fieldset.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TextInputComponent,
    TextAreaComponent,
    FormContainerComponent,
    FieldsetComponent
  ],
  exports: [
    TextInputComponent,
    TextAreaComponent,
    FormContainerComponent,
    FieldsetComponent
  ],
})
export class NgxCastleFormsModule {}
