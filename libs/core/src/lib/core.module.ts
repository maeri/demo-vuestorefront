import { AddToBaseComponent } from './add-to-base-component/add-to-base.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '@playground/services';

@NgModule({
  imports: [CommonModule, ServicesModule],
  declarations: [AddToBaseComponent],
  exports: [AddToBaseComponent]
})
export class CoreModule {}
