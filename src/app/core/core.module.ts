import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';

//Material modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FlexLayoutModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
