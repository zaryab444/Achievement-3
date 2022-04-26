import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@core/components/header/header.component';
import { SideNavigationComponent } from '@core/components/side-navigation/side-navigation.component';
import { FooterComponent } from '@core/components/footer/footer.component';
import { BreadcrumbComponent } from '@core/components/breadcrumb/breadcrumb.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import {MenubarModule} from 'primeng/menubar';


@NgModule({
  declarations: [
    HeaderComponent,
    SideNavigationComponent,
    FooterComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    ButtonModule,
    SidebarModule,
    MenubarModule
    ],
  exports: [ 
    HeaderComponent,
    SideNavigationComponent,
    FooterComponent,
    BreadcrumbComponent
   ]
})
export class CoreModule { }
