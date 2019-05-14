import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidenavDirective } from './navbar/sidenav.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, SidenavDirective, HomeComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent, HomeComponent]
})
export class LayoutModule {}
