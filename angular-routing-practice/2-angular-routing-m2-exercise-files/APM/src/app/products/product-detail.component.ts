import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;
        
    ngOnInit(): void {
        //+ used to cast to number
        // usign resolver to get tehdata 
        // let id = +this.route.snapshot.params['id'];
        // this.getProduct(id);
        this.product = this.route.snapshot.data['product'];

    }
  
    // 
    // constructor(private productService: ProductService, private route:ActivatedRoute) { 

    constructor(private route: ActivatedRoute) {
        console.log(this.route.snapshot.params['id']);

    }

    // getProduct(id: number) {
    //     this.productService.getProduct(id).subscribe(
    //         product => this.product = product,
    //         error => this.errorMessage = <any>error);
    // }


}
