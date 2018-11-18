
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './product';


@Injectable()
export class ProductResolver implements Resolve<IProduct> {


    constructor(private productService: ProductService,
        private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IProduct | Observable<IProduct> | Promise<IProduct> {
        let id = route.params['id'];

        if (isNaN(id)) {

            console.log(`Product id was not a number: ${id}`);
            this.router.navigateByUrl('/products');
            return Observable.of(null);

        }


        return this.productService.getProduct(+id)
            .map((product: any) => {
                if (product) {
                    return product;
                }

                console.log(`Product id was not found: ${id}`);
                this.router.navigateByUrl('/products');
                return null;
            })
            .catch((error: any) => {
                console.log(`Retrievel Error : ${error}`)
                this.router.navigateByUrl('/products');
                return Observable.of(null);
            })

    }



}
