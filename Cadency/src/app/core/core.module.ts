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
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { TranslateModule } from '@ngx-translate/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {AccordionModule} from 'primeng/accordion';
import { TextFilterDirective } from './directives/text-filter.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    SideNavigationComponent,
    FooterComponent,
    BreadcrumbComponent,
    TextFilterDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    ButtonModule,
    SidebarModule,
    MenubarModule,
    BreadcrumbModule,
    TranslateModule,
    TranslateModule.forRoot(),
    FlexLayoutModule,
    AccordionModule

    ],
  exports: [ 
    HeaderComponent,
    SideNavigationComponent,
    FooterComponent,
    BreadcrumbComponent,
    TextFilterDirective
   ]
})
export class CoreModule { }
