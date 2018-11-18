"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var ProductDetailComponent = (function () {
    // 
    // constructor(private productService: ProductService, private route:ActivatedRoute) { 
    function ProductDetailComponent(route) {
        this.route = route;
        this.pageTitle = 'Product Detail';
        console.log(this.route.snapshot.params['id']);
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        //+ used to cast to number
        // usign resolver to get tehdata 
        // let id = +this.route.snapshot.params['id'];
        // this.getProduct(id);
        this.product = this.route.snapshot.data['product'];
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            templateUrl: './app/products/product-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map