import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductsService } from './products.service';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [CatalogComponent, ProductComponent],
  imports: [
    CommonModule,
    StoreRoutingModule
  ],
  providers: [ProductsService]
})
export class StoreModule { }
