import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'edureka-productlisting-page',
  templateUrl: './productlisting-page.component.html',
  styleUrls: ['./productlisting-page.component.scss']
})
export class ProductlistingPageComponent implements OnInit {

  productsListing : Product[] = [];

  constructor(private products : ProductsService) { }

  ngOnInit(): void {
      this.products.getProductList().subscribe((response : Product[])=>{
          this.productsListing = response
          console.log(this.productsListing);
      })
  }

}
