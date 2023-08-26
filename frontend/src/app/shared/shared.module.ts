import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BackendHeaderComponent } from './backend-header/backend-header.component';
import { BackendFooterComponent } from './backend-footer/backend-footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BackendHeaderComponent,
    BackendFooterComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    BackendHeaderComponent,
    BackendFooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
