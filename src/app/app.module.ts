import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_GB } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ZORRO_MODULES } from './zorro-modules';
import { RouterModule } from '@angular/router';
import { CrashDetailsComponent } from './pages/crash-details/crash-details.component';
import { CrashDataComponent } from './pages/crash-data/crash-data.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CrashDataComponent,
    CrashDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    ...ZORRO_MODULES,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
    ],
  providers: [
    { provide: NZ_I18N, useValue: en_GB },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
