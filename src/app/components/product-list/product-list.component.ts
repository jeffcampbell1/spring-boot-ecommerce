import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-table.component.html',
  //templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // integrating our service w/ angular component

  // set up a property for Products .. 
  products: Product[] = [];

  // inject our product service dependency
  constructor(private productService: ProductService) {}

  // similar to @PostConstruct .. calling list products method.
  ngOnInit(): void {
    this.listProducts();
  }

  // Method is invoked once you "subscribe"

  listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        // assign results to the Product array
        this.products = data;
      }
    )
  }

}
