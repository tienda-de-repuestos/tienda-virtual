import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/product';
import { ProductsService } from '../products.service';
import { Categorie } from '../../shared/models/categorie';

@Component({
  selector: 'iso-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit//,OnDestroy {
{
  categories$: Observable<Categorie[]>;
  
  constructor(private productsService: ProductsService) { }
  ngOnInit() {
    this.categories$ = this.productsService.getCategories();
    
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
