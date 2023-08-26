import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [AppComponent, DefaultLayoutComponent, BackendLayoutComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
