import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'iso-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit//,OnDestroy {
{
  products$: Observable<Product[]>;
  // products: Product[];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
    // this.products$.subscribe(products =>{
    //   this.products=products;
    //   console.log(this.products);
    // });
    // en caso de suscripcion
  }

  // ngOnDestroy(): void{
  //   unsuscribe
  // }

}
