import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { AppenderPipe } from './pipes/appender.pipe';

@NgModule({
  declarations: [LoaderComponent, AppenderPipe],
  imports: [CommonModule],
  exports: [CommonModule, LoaderComponent, AppenderPipe],
})
export class SharedModule {}
